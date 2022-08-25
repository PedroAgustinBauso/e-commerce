const express = require("express");
const cartRouter = express.Router();
const {
  Product,
  User,
  Ticket,
  Cart,
  Categories,
  CartItem,
} = require("../models");



cartRouter.get("/:id", (req, res) => {
  Cart.findByPk(req.params.id, { include: Product }).then((cart) => {
    res.send(cart);
  });
});

//ruta de agregar y editar item
//desde el fron viene el precio del producto, su cantidad y su nombre,
//además del id del usuario logueado en ese momento
cartRouter.put("/:id", (req, res) => {
  CartItem.findOrCreate({ where: { id: req.body.userId } }).then(
    ([cart_item]) => {
      cart_item.update(req.body);
      res.status(202).send(cart_item);
    }
  );
});

//ruta para eliminar un item
cartRouter.delete("/:id", (req, res) => {
  CartItem.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(204)
  );
});


module.exports = cartRouter;
