const express = require("express");
const router = express.Router();
const {
  Product,
  Cart,
  CartItem,
  Order,
  OrderItem,
  User,
} = require("../models");

router.get("/:userId", async (req, res) => {
  let totalAmount = 0;
  const { userId } = req.params;

  let cart = await Cart.findOne({
    where: { userId },
    include: [{ model: Product }, { model: User }],
  });

  cart.products.forEach((product) => {
    totalAmount += product.price * product.cart_item.quantity;
  });

  let order = await Order.create({
    userId,
    totalAmount,
  });

  let orderItems = cart.products.map((product) => {
    res.send(product[0].cart_items);
    // return {
    //   ...product.cart_item,
    //   orderId: order.id,
    // };
  });

  // await OrderItem.bulkCreate(orderItems);

  // res.send(orderItems);
});

module.exports = router;
