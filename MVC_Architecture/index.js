const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/users_routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resourse not found",
  });
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
