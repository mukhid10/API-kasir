const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: [mongoose.Types.ObjectId],
    ref: "category",
  },
  kode: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
