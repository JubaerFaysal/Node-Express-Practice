const path = require("path");
const products = require("../models/product_model");

exports.getProduct = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/products.html"));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const product = {
    name,
    price,
  };
  products.push(product);
  res.status(202).json(products);
};
