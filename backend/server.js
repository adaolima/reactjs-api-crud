require("dotenv").config();
const express = require("express");
// const logger = require("morgan");
const cors = require("cors");
const AuthMiddleware = require("./middleware/auth-middleware");
const routes = require("./routes");

const http = require("http");

const app = express();

app.use(express.logger("dev"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.cookieParser());
app.use(AuthMiddleware);

//Models
var models = require("./models");
//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

app.use(routes);

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
