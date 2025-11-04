const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Hello, World!");
  res.end();
});

app.post("/post", (req, res) => {
  res.send("post Page");
  res.end();
});

app.put("/put", (req, res) => {
  res.send("pub Page");
  res.end();
});

app.delete("/delete", (req, res) => {
  res.send("Delete Page");
  res.end();
});

module.exports = app;
