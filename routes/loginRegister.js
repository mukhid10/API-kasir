const express = require("express");
const route = express.Router();

const { addUser, addUserLogin } = require("../controllers/usersController");

route.post("/register", addUser);
route.post("/login", addUserLogin);

module.exports = route;
