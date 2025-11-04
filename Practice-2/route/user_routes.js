const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
  res.end();
});

router.get("/login", (req, res) => {
  res.send("post Page");
  res.end();
});

router.get("/register", (req, res) => {
  res.send("pub Page");
  res.end();
});

router.get("/home", (req, res) => {
  res.send("Delete Page");
  res.end();
});

module.exports = router;
