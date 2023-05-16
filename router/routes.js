const express = require("express");
const router = express.Router();

const fisherController = require("../controller/fisherController");
router
  .route("/user")
  .post((req, res) => fisherController.save(req, res))
  .get((req, res) => fisherController.list(req, res))
  .put((req, res) => fisherController.save(req, res))
  .delete((req, res) => fisherController.save(req, res));

module.exports = router;
