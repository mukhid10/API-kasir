const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  updateProduct,
  deleteProductById,
  addProduct,
} = require("../controllers/peoductController");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", addProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProductById);

module.exports = router;
