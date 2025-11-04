const express = require("express");
const morgan = require("morgan");
const app = express();

//app.use(morgan("dev"));
function customMiddleware(req, res, next) {
  //res.send("This is custom middleware");
  console.log("This is custom middleware");
  next();
}
function tinyMiddleware() {
  return (req, res, next) => {
    console.log(`${req.method}--- ${req.url}`);
    next();
  };
}

let middleware = [customMiddleware, tinyMiddleware()];
app.use(middleware);

//app.use(customMiddleware);

function home(req, res) {
  res.send("Hello, World!");
}

function homep(req, res) {
  //console.log(req.body);
  res.send("This is home with post method");
}

// app.use(express.json());

app.get("/", home);
app.get("/home", homep);

app.listen(3000, () => {
  console.log("server is starting..");
});
