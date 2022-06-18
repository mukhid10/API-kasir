const Product = require("../models/productSchema");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Product.find()
        .populate("category", "name -_id")
        .populate("userId", "_id");

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
      const data = await Product.findById(req.params.id)
        .populate("category", "name -_id")
        .populate("userId", "_id");

      res.json({
        msg: "success get data by ID",
        products: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getByUserId: async (req, res) => {
    try {
      const data = await Product.find({
        userId: req.body.userId,
      })
        .populate("category", "name -_id")
        .populate("userId", "_id");

      res.status(200).json({
        msg: "success get data by userID",
        products: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addProduct: async (req, res) => {
    try {
      const { name, price, stock, category, kode, desc, userId } = req.body;
      const image = req.file.path;

      await Product.create({
        name: name,
        price: price,
        stock: stock,
        category: category,
        kode: kode,
        desc: desc,
        userId: userId,
        image: image,
      });

      res.json({
        msg: "success add product",
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { name, price, stock, category, kode, desc, userId } = req.body;
      const image = req.file.path;
      await Product.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name: name,
            price: price,
            stock: stock,
            category: category,
            kode: kode,
            desc: desc,
            userId: userId,
            image: `http://localhost:5000/${image}`,
          },
        }
      );

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
