const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  addCategory,
  updateById,
  deleteById,
} = require("../controllers/categoryController");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", addCategory);
router.patch("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
