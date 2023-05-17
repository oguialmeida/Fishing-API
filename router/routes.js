const express = require("express");
const router = express.Router();

// Capturing requests from controller
const fisherController = require("../controller/fisherController");

// Creantig the user main route
router
  .route("/user")
  .post((req, res) => fisherController.save(req, res))
  .get((req, res) => fisherController.list(req, res));

// Route to get a user by ID
router
  .route("/user/:id")
  .get((req, res) => fisherController.getById(req, res))
  .put((req, res) => fisherController.update(req, res))
  .delete((req, res) => fisherController.delete(req, res));

module.exports = router;
