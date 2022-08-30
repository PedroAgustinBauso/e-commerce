const express = require("express");
const user = require("./user");
const router = express.Router();
const products = require("./products");
const cartRouter = require("./cart");
const category = require("./category");
const pastOrders = require("./pastOrders");

router.use("/cart", cartRouter);
router.use("/products", products);
router.use("/users", user);
router.use("/category", category);
router.use("/pastOrders", pastOrders);

module.exports = router;
