const { PrismaClient } = require('@prisma/client');

class AuthorController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getAuthor = async (req, res) => {
    const authors = await this.prisma.author.findMany();
    res.render('author', { authors, admin: req.user });
  };

  formCreateAuthor = async (req, res) => {
    res.render('create-author', {admin: req.user});
  };

  storeAuthor = async (req, res) => {
    try {
      const payload = req.body;
      await this.prisma.author.create({
        data: payload,
      });
      res.redirect('/authors');
    } catch (error) {
      res.send(error.message);
    }
  };

  formEditAuthor = async (req, res) => {
    try {
      const id = req.params.authorId;
      const author = await this.prisma.author.findUnique({
        where: { id: parseInt(id) },
      });  
      
      res.render("edit-author", { author, admin: req.user });

    } catch (error) {
      res.send(error.message);
    }
  };

  updateAuthor = async (req, res) => {
    try {
      const payload = req.body;
      
      await this.prisma.author.update({
        where: {
          id: parseInt(payload.authorId),
        },
        data: {
          name : payload.name,
          username : payload.username
        },
      })
      res.redirect(`/authors`);
    } catch (error) {
      res.send(error.message);
    }
  };

  deleteAuthor = async (req, res) => {
    try {
      const authorId = req.params.authorId;
      const author = await this.prisma.author.findUnique({
        where: { id: parseInt(authorId) },
      });
      
      if (!author) {
        res.send("Author not found");
      }

      await this.prisma.author.delete({
        where: {
          id: parseInt(authorId),
        },
      })

      res.redirect(`/authors`);
    
    } catch (error) {
      res.send(error.message);
    }
  };
}

module.exports = new AuthorController();