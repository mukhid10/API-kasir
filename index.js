const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("connect mongoDB atlas Success"))
  .catch((error) => console.error(error));

//Midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const allRouter = require("./routes/index");
app.use(allRouter);

app.listen(port, () => console.log(`Server ${port} is Okey`));
