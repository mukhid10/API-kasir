const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  getByUserId,
  updateProduct,
  deleteProductById,
  addProduct,
} = require("../controllers/peoductController");

router.get("/", getAll);
router.get("/:id", getById);
router.get("/user/:userId", getByUserId);
router.post("/", addProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProductById);

module.exports = router;
