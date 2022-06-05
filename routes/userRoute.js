const express = require("express");
const route = express.Router();

const {
  getAll,
  getByID,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

route.get("/", getAll);
route.get("/:id", getByID);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

module.exports = route;
