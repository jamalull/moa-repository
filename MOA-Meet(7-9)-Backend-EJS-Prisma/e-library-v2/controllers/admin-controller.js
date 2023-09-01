const { PrismaClient } = require('@prisma/client');

class AdminController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getLogin = (req, res) => {
    res.render('login');
  }

  getRegister = (req, res) => {
    res.render('register');
  }

  logout = (req, res) => {
    req.logout(function(err){
      if(err){
        throw err;
      }
      res.redirect('/');
    });
  }
}

module.exports = new AdminController();