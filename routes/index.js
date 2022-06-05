const express = require("express");
const router = express.Router();

const productRoute = require("./productRoute");
const userRoute = require("./userRoute");
const loginRegis = require("./loginRegister");
const categoryRoute = require("./categoryRoute");

const authJWT = require("../auth");

router.use("/", loginRegis);

router.use(authJWT);

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/category", categoryRoute);

module.exports = router;
