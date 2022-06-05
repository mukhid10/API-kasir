const Category = require("../models/categorySchema");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Category.find();

      res.json({
        message: "get all success",
        category: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);

      res.json({
        msg: "success get data by ID",
        category: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addCategory: async (req, res) => {
    try {
      const data = req.body;

      await Category.create(data);

      res.json({
        msg: "succes add Category",
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateById: async (req, res) => {
    try {
      await Category.updateOne({ _id: req.params.id }, { $set: req.body });

      res.json({
        msg: "success update",
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteById: async (req, res) => {
    try {
      await Category.deleteOne({ _id: req.params.id });

      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
