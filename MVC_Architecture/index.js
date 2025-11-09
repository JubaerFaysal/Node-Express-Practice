const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const routes = require("./routes/users_routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/sk")
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.log("❌", err));

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
