const express = require("express");
const router = express.Router();
const { Review } = require("../models");

router.post("/:userId/:productId", (req, res) => {
  const { userId, productId } = req.params;
  const { description, valoracion } = req.body;
  Review.findOrCreate({
     where: { userId, productId },
    defaults: { userId, productId, description, valoracion }}
  ).then((result) => res.send(result));
});

module.exports = router;
