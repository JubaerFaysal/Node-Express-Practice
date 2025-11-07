const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleware); //for all request middileware will be used

// app.get("/", myMiddleware, (req, res) => {
//   res.json({
//     Requesttime: req.currentTime,
//     msg: "Middleware",
//   });
// });

app.get("/", (req, res) => {
  res.json({
    Requesttime: req.currentTime,
    msg: "Middleware",
  });
});

app.get("/about", (req, res) => {
  res.json({
    Requesttime: req.currentTime,
    msg: "Middleware about",
  });
});

app.listen(3000, () => {
  console.log(`Running at http://localhost:3000`);
});
