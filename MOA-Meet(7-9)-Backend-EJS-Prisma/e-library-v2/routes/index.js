const router = require("express").Router();
const AdminController = require("../controllers/admin-controller");
const AuthorController = require("../controllers/author-controller");
const BookController = require("../controllers/book-controller");
const passport = require("passport");

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

router.get("/", isLoggedIn, (req, res) => {
  res.render("dashboard_home", {admin: req.user});
});

router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", {admin: req.user});
});

router.get("/contact", isLoggedIn, (req, res) => {
  res.render("contact", {admin: req.user});
});

// login and register
router.get("/login", AdminController.getLogin);
router.get("/register", AdminController.getRegister);
router.post(
  "/register",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/register",
    failureFlash: true,
  })
);
router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
router.get("/logout", isLoggedIn, AdminController.logout);

// User or Author
router.get("/authors", isLoggedIn, AuthorController.getAuthor);
router.get("/authors/create", isLoggedIn, AuthorController.formCreateAuthor);
router.post("/authors", isLoggedIn, AuthorController.storeAuthor);
router.get("/authors/edit/:authorId", isLoggedIn, AuthorController.formEditAuthor);
router.post("/authors/edit", isLoggedIn, AuthorController.updateAuthor);
router.get("/authors/delete/:authorId", isLoggedIn, AuthorController.deleteAuthor);


// Book
router.get("/allbooks", isLoggedIn, BookController.getAllBook);
router.get("/books/:authorId", isLoggedIn, BookController.getBook);
router.get("/books/create/:authorId", isLoggedIn, BookController.formCreateBook);
router.get("/books/edit/:authorId/:bookId", isLoggedIn, BookController.formEditBook);
router.post("/books", isLoggedIn, BookController.storeBook);
router.post("/books/edit", isLoggedIn, BookController.updateBook);
router.get("/books/delete/:authorId/:bookId", isLoggedIn, BookController.deleteBook);

module.exports = router;
