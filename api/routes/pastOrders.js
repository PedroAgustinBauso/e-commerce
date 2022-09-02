const express = require("express");
const { validateAuth } = require("../middlewares/auth");
const router = express.Router();
const { Order, Product } = require("../models");

router.get("/:userId", validateAuth, (req, res) => {
  Order.findAll({ where: { userId: req.params.userId } })
    .then((result) => res.send(result))
    .catch(() => res.sendStatus(401));
});

router.get("/detail/:orderId", validateAuth, (req, res) => {
  Order.findOne({
    where: {
      id: req.params.orderId,
    },
    include: {
      model: Product,
    },
  })
    .then((result) => res.send(result))
    .catch(() => {
      res.sendStatus(401);
    });
});

module.exports = router;
