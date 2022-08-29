const express = require("express");
const user = require("./user");
const router = express.Router();
const products = require("./products");
const cartRouter = require("./cart");
const category = require("./category");

router.use("/cart", cartRouter);
router.use("/products", products);
router.use("/users", user);
router.use("/category", category);

module.exports = router;
