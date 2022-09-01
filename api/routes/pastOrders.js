const express = require("express");
const { validateAuth } = require("../middlewares/auth");
const router = express.Router();
const { Order } = require("../models");

router.get("/:userId", validateAuth, (req, res) => {
  Order.findAll({ where: { userId: req.params.userId } })
    .then((result) => res.send(result))
    .catch(() => res.sendStatus(401));
});

module.exports = router;
