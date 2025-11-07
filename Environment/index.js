require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("i am home page");
});

app.listen(port, () => {
  console.log(`running at http://localhost:${3000}`);
});
