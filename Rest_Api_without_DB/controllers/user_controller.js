const users = require("../models/user_model");

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  res.status(200).json({ msg: "i am post method" });
};

module.exports = { getAllUsers, createUser };
