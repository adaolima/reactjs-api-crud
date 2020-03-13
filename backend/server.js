require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const routes = require("./routes");

const http = require("http");

const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

const port = process.env.API_PORT || 8000;

app.set("port", port);

const server = http.createServer(app);

console.log("Porta : ", port);

server.listen(port);

module.exports = app;
