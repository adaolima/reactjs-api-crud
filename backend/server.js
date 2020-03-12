require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const http = require("http");

const app = express();

app.use(logger("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("*", (req, res) => {
  res.status(200).send({
    message: "All things start here..."
  });
});

const port = process.env.API_PORT || 8000;

app.set("port", port);

const server = http.createServer(app);

console.log("Porta : ", port);

server.listen(port);

module.exports = app;
