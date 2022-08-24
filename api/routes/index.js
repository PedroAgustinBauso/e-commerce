const express = require("express");
const router = express.Router();
const products = require('./products')
const cartRouter = require("./cart");

router.use("/cart", cartRouter);
router.use("/products", products)

module.exports = router;
