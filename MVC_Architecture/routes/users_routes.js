const express = require("express");
const routes = express.Router();
const { getUser, saveUser } = require("../controllers/user_controller");
const {
  getProduct,
  saveProduct,
} = require("../controllers/product_controller");

routes.get("/users", getUser);
routes.post("/users", saveUser);

routes.get("/products", getProduct);
routes.post("/products", saveProduct);

module.exports = routes;
