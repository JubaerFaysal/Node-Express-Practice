const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

//app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/register", (req, res) => {
  const name = req.body.fullName;
  const age = req.body.age;
  res.send(`<h1>Your name is ${name} and age is ${age}`);
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
