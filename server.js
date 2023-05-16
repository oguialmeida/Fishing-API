const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./router/routes");

// Catching the express lib
const app = express();

// Parsing json objects in to js objects
app.use(bodyParser.json());

// Geting routes
app.use("/", routes);

// Rest security
app.use(helmet());

// Using cors for all requets
app.use(cors());

// Adding morgan to HTTP logs (organize the errors)
app.use(morgan("combined"));

// Declaring the main route endpoint
app.get("/", (req, res) => {
  const obj = [{ title: "Hello world!" }];
  res.send(obj);
});

// Starting the server
const server = app.listen(process.env.PORT || 3031, () => {
  const { port } = server.address();
  console.log(`Server running o port ${port}`);
});
