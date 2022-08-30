const express = require("express");
const router = express.Router();
const { Order } = require("../models/Order");


  router.get("/:userId", (req, res) => {
    Order.findAll(req.params.userId).then((result) => res.send(result));
  })


module.exports = router;