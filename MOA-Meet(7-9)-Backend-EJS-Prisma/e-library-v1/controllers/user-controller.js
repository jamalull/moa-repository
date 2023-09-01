const { PrismaClient } = require('@prisma/client');

class UserController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getUser = async (req, res) => {
    const users = await this.prisma.user.findMany();
    res.render('user', { users });
  };

  formCreateUser = async (req, res) => {
    res.render('create-user');
  };

  storeUser = async (req, res) => {
    try {
      const payload = req.body;
      await this.prisma.user.create({
        data: payload,
      });
      res.redirect('/users');
    } catch (error) {
      res.send(error.message);
    }
  };

  formEditUser = async (req, res) => {
    try {
      const id = req.params.userId;
      const user = await this.prisma.user.findUnique({
        where: { id: parseInt(id) },
      });  
      
      res.render("edit-user", { user });

    } catch (error) {
      res.send(error.message);
    }
  };

  updateUser = async (req, res) => {
    try {
      const payload = req.body;
      
      await this.prisma.user.update({
        where: {
          id: parseInt(payload.userId),
        },
        data: {
          name : payload.name,
          username : payload.username
        },
      })
      res.redirect(`/users`);
    } catch (error) {
      res.send(error.message);
    }
  };

  deleteUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await this.prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });
      
      if (!user) {
        res.send("User not found");
      }

      await this.prisma.user.delete({
        where: {
          id: parseInt(userId),
        },
      })

      res.redirect(`/users`);
    
    } catch (error) {
      res.send(error.message);
    }
  };
}

module.exports = new UserController();