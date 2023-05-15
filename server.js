const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Catching the express lib
const app = express();

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
  const obj = [{ title: "Hello world!" }];
  res.send(obj);
});

// Starting the server
const portNumber = app.listen(process.env.PORT || 3031);
app.listen(portNumber, () => console.log(`Server running on port ${portNumber}`));
