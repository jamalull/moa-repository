const router = require("express").Router();
const UserController = require("../controllers/user-controller");
const BookController = require("../controllers/book-controller");

router.get("/", (req, res) => {
  res.render("index", {user: req.user});
});

// User or Author
router.get("/users", UserController.getUser);
router.get("/users/create", UserController.formCreateUser);
router.post("/users", UserController.storeUser);
router.get("/users/edit/:userId", UserController.formEditUser);
router.post("/users/edit", UserController.updateUser);
router.get("/users/delete/:userId", UserController.deleteUser);


// Book
router.get("/books/:userId", BookController.getBook);
router.get("/books/create/:userId", BookController.formCreateBook);
router.get("/books/edit/:userId/:bookId", BookController.formEditBook);
router.post("/books", BookController.storeBook);
router.post("/books/edit", BookController.updateBook);
router.get("/books/delete/:userId/:bookId", BookController.deleteBook);

module.exports = router;
