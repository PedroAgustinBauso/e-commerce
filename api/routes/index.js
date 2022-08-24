const express = require("express");
const user = require("./user")
const router = express.Router();
const products = require('./products')
const cartRouter = require("./cart");

router.use("/cart", cartRouter);
router.use("/products", products)
router.use("/users", user)

module.exports = router;
