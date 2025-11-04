const express = require("express");
const app = express();

// Use the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log(process.env.PORT);
