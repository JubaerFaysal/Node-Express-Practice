const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./routes/users_routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

module.exports = app;
