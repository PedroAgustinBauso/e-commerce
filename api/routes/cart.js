const express = require("express");
const cartRouter = express.Router();
const { Product, User, Ticket, Cart, Categories } = require("../models");

cartRouter.get("/:id", (req, res) => {
  Cart.findByPk(req.params.id, { include: Product }).then((cart) => {
    res.send(cart);
  });
});

cartRouter.put("/:id", (req, res) => {
  const { productId } = req.body;
  Cart.findByPk(req.params.id, { include: Product }).then((cart) => {
    cart.addProduct(productId);
    res.send(cart);
  });
});
module.exports = cartRouter;
