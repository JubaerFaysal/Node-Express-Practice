const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    userName: "Jubaer",
    email: "jubaer@mail.com",
  },
  {
    id: uuidv4(),
    userName: "Faysal",
    email: "faysal@mail.com",
  },
];

module.exports = users;
