const router = require("express").Router();
const booksController = require("../controllers/controller");

// Matches with "/api/books"
router.route("/api")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/api/:id")
  .get(booksController.findById)
  .delete(booksController.remove);
module.exports = router;
