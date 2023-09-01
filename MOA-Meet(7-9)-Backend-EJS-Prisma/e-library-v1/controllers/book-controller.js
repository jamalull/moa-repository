const { PrismaClient } = require("@prisma/client");

class BookController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getBook = async (req, res) => {
    const id = req.params.userId;
    const user = await this.prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      res.send("User not found");
    }
    const books = await this.prisma.book.findMany({
      where: { userId: parseInt(id) },
    });
    res.render("book", { books, user });
  };

  formCreateBook = async (req, res) => {
    const id = req.params.userId;
    const user = await this.prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      res.send("User not found");
    }
    res.render("create-book", { user });
  };

  storeBook = async (req, res) => {
    try {
      const payload = req.body;
      payload.userId = parseInt(payload.userId);
      payload.price = parseInt(payload.price);
      await this.prisma.book.create({
        data: payload,
      });
      res.redirect(`/books/${payload.userId}`);
    } catch (error) {
      res.send(error.message);
    }
  };

  formEditBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const userId = req.params.userId;

      const user = await this.prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });
      
      if (!user) {
        res.send("User not found");
      }

      const book = await this.prisma.book.findUnique({
        where: { id: parseInt(bookId) },
      });
      
      res.render("edit-book", { book, user});

    } catch (error) {
      res.send(error.message);
    }
  };

  updateBook = async (req, res) => {
    try {
      const payload = req.body;

      const userId = parseInt(payload.userId);
      const bookId = parseInt(payload.bookId);
      payload.price = parseInt(payload.price);

      await this.prisma.book.update({
        where: {
          id: bookId,
        },
        data: {
          name : payload.name,
          description : payload.description,
          price : payload.price,
          publisher : payload.publisher
        },
      })
      res.redirect(`/books/${userId}`);
    } catch (error) {
      res.send(error.message);
    }
  };

  deleteBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const userId = req.params.userId;
      const book = await this.prisma.book.findUnique({
        where: { id: parseInt(bookId) },
      });
      
      if (!book) {
        res.send("Book not found");
      }

      await this.prisma.book.delete({
        where: {
          id: parseInt(bookId),
        },
      })

      res.redirect(`/books/${parseInt(userId)}`);
    
    } catch (error) {
      res.send(error.message);
    }
  };
}

module.exports = new BookController();
