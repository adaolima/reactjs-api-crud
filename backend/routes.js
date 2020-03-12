const express = require("express");

const UserController = require("./controllers/UserContoller");

const routes = express.Router();

routes.get("/api/v1/users", UserController.read);
routes.post("/api/v1/users", UserController.create);
routes.put("/api/v1/users", UserController.update);
routes.delete("/api/v1/users", UserController.delete);

module.exports = routes;
