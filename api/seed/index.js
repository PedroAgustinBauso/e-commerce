const { User, Categories, Product } = require("../models");

User.bulkCreate([
  {
    name: "Joselito",
    lastname: "Duarte",
    email: "joselito@gmail.com",
    password: "algarrobo",
    date_of_birth: "1980-12-02", //como se pone la fecha!?
    address: "asdeas",
    is_admin: true,
  },

  {
    name: "Jose",
    lastname: "Dua",
    email: "jose@gmail.com",
    password: "alga",
    date_of_birth: "1999-10-24",
    address: "astr",
  },

  {
    name: "Braulio",
    lastname: "Arte",
    email: "Braulio@gmail.com",
    password: "robo",
    date_of_birth: "2001-11-20",
    address: "dddd",
    is_admin: true,
  },

  {
    name: "Kletus",
    lastname: "Teduar",
    email: "kletus@gmail.com",
    password: "Gala",
    date_of_birth: "1987-07-03",
    address: "kidsagds",
  },

  {
    name: "Cristobal",
    lastname: "Remo",
    email: "cristobal@gmail.com",
    password: "agua",
    date_of_birth: "2003-01-18",
    address: "iyzy",
  },
]);

Categories.bulkCreate([
  {
    name: "vinos",
  },
  {
    name: "cervezas",
  },
  {
    name: "espumantes",
  },
  {
    name: "licores",
  },
  {
    name: "gin",
  },
  {
    name: "vodka",
  },
  {
    name: "ron",
  },
  {
    name: "aperitivos",
  },
]);

Product.bulkCreate(
  Product.bulkCreate([
    {
      name: "Pack Andes Ipa Pack x5 475ml",
      price: 1200,
      description: "Pack de Cerveza Antes Ipa ipa ipa ipa ipa",
      stock: 20,
      brand: "Andes",
    },
    {
      name: "Fernet Branca 710ml",
      price: 1200,
      description: "Fernet fernet brranca branca branca",
      stock: 20,
      brand: "Branca",
    },
    {
      name: "Fernet Branca 950ml",
      price: 1900,
      description: "Fernet fernet brranca branca branca",
      stock: 20,
      brand: "Branca",
    },
    {
      name: "Botella Patagonia 24.7 750ml",
      price: 450,
      description: "Cerveza Patagonia 24.7 750ml por Unidad",
      stock: 20,
      brand: "Patagonia",
    },
    {
      name: "Botella Gancia",
      price: 1300,
      description: "Botella Gancia Botella Gancia Botella Gancia",
      stock: 2,
      brand: "Gancia",
    },
    {
      name: "Jack Daniels",
      price: 5000,
      description: "Botella Jack Daniels Jack Daniels",
      stock: 8,
      brand: "Jack Daniels",
    },
  ])
);
