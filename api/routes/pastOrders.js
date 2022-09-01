const express = require("express");
const { validateAuth } = require("../middlewares/auth");
const router = express.Router();
const { Order } = require("../models/Order");

router.get("/:userId", validateAuth, (req, res) => {
  Order.findAll(req.params.userId).then((result) => res.send(result));
});





module.exports = router;
