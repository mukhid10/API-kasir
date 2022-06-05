const Product = require("../models/productSchema");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Product.find();

      res.json({
        message: "get all product success",
        product: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await Product.findById(req.params.id);

      res.json({
        msg: "success get data by ID",
        products: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addProduct: async (req, res) => {
    try {
      const data = req.body;

      await Product.create(data);

      res.json({
        msg: "success add product",
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateProduct: async (req, res) => {
    try {
      await Product.updateOne({ _id: req.params.id }, { $set: req.body });

      res.json({
        msg: "success update",
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteProductById: async (req, res) => {
    try {
      await Product.deleteOne({ _id: req.params.id });

      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
