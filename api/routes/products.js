const express = require("express");
const router = express.Router();

const { Product, Categories } = require("../models");

router.get("/", (req, res) => {
  Product.findAll().then((result) => res.send(result));
});

router.get("/:category", (req, res) => {

    Categories.findOne({
      where: { name: req.params.category },
      include: { model: Product },
    }).then((categoria) => {
      res.send(categoria.products);
    });

  // console.log("entre al get");
  // if (req.params.category) {
  //   console.log("entre por el if de categoria");

  //   Categories.findOne({
  //     where: { name: req.params.category },
  //     include: { model: Product },
  //   }).then((categoria) => {
  //     res.send(categoria);
  //   });
  // } else {
  //   Product.findAll().then((productos) => res.send(productos));
  // }

  //Product.findAll({ include: Categories }).then((result) => res.send(result));
});

// router.get("/:category", (req, res) => {
//   Product.findAll({
//     include: [{
//       model: Categories,
//       where: { name:  req.params.category }
//     }]
//   }).then((products)=> console.log(products));
// });

router.get("/single/:id", (req, res) => {
  const id = req.params.id;
  Product.findByPk(id).then((result) => res.send(result));
});

router.post("/", (req, res) => {
  const producto = req.body;

  // const { categoria } = req.body;

  //   Categorias.findOrCreate({ where: { nombre: categoria } }).then((finds) => {
  //     const categorias = finds[0];
  //     Productos.create(req.body)
  //       .then((producto) => producto.setCategoria(categorias))
  //       .then((productos) => res.send(productos));
  //   });

  Product.create(producto)
    .then((product) => {
      Categories.findOrCreate({ where: { name: req.body.categoria } }).then(
        (categoria) => {
          product.setCategories(categoria);
          res.status(201).send(product);
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(401);
    });
});

router.put("/:id", (req, res) => {
  //Me genera dudas esta ruta, Funciona el edit, pero depende de como configuran el front, no necesitamos pasarle el id para que reconozca al admin y pueda editar.
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  }).then(([e, product]) => res.status(201).send(product));
});

router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(204));
});

module.exports = router;
