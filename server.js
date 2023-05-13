const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Catching the express lib
const app = express();

// Temporary database
const obj = [{ title: "Hello world!" }];

// Rest security
app.use(helmet());

// Parsing json objects in to js objects
app.use(bodyParser.json());

// Using cors for all requets
app.use(cors());

// Adding morgan to HTTP logs
app.use(morgan("combined"));

// Declaring the main route endpoint
app.get("/", (req, res) => {
  res.send(obj);
});

// Starting the server
app.listen(3101, () => {
  console.log("Server rodando na porta 3101");
});
