const { PrismaClient } = require("@prisma/client");

class BookController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getAllBook = async (req, res) => {
    const books = await this.prisma.book.findMany();
    const author = await this.prisma.author.findMany();

    res.render('allbooks', { books, author, admin: req.user });
  };

  getBook = async (req, res) => {
    const id = req.params.authorId;
    const author = await this.prisma.author.findUnique({
      where: { id: parseInt(id) },
    });
    if (!author) {
      res.send("Author not found");
    }
    const books = await this.prisma.book.findMany({
      where: { authorId: parseInt(id) },
    });
    res.render("book", { books, author, admin: req.user });
  };

  formCreateBook = async (req, res) => {
    const id = req.params.authorId;
    const author = await this.prisma.author.findUnique({
      where: { id: parseInt(id) },
    });
    if (!author) {
      res.send("Author not found");
    }
    res.render("create-book", { author, admin: req.user });
  };

  storeBook = async (req, res) => {
    try {
      const payload = req.body;
      payload.authorId = parseInt(payload.authorId);
      payload.price = parseInt(payload.price);
      await this.prisma.book.create({
        data: payload,
      });
      res.redirect(`/books/${payload.authorId}`);
    } catch (error) {
      res.send(error.message);
    }
  };

  formEditBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const authorId = req.params.authorId;

      const author = await this.prisma.author.findUnique({
        where: { id: parseInt(authorId) },
      });
      
      if (!author) {
        res.send("Author not found");
      }

      const book = await this.prisma.book.findUnique({
        where: { id: parseInt(bookId) },
      });
      
      res.render("edit-book", { book, author, admin: req.user});

    } catch (error) {
      res.send(error.message);
    }
  };

  updateBook = async (req, res) => {
    try {
      const payload = req.body;

      const authorId = parseInt(payload.authorId);
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
      res.redirect(`/books/${authorId}`);
    } catch (error) {
      res.send(error.message);
    }
  };

  deleteBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const authorId = req.params.authorId;
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

      res.redirect(`/books/${parseInt(authorId)}`);
    
    } catch (error) {
      res.send(error.message);
    }
  };
}

module.exports = new BookController();
