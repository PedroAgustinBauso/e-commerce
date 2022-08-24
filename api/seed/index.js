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

Product.bulkCreate([
  {
    name: "Pack Andes Ipa Pack x5 475ml",
    price: 1200,
    description:
      "La Andes IPA Andina es una cerveza estilo IPA, valga la redundancia, de la escuela Inglesa. Como seguramente usted sabe, este estilo de cerveza se caracteriza por el amargor que le otorga su alto contenido de lúpulo.",
    stock: 20,
    brand: "Andes",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/andes_ipa_1000x2048_f9c0fb04-5564-499b-b7df-3e65e3bb9c9c_grande1-834bfca25342359ea215914720299753-480-0.png",
  },
  {
    name: "Fernet Branca 710ml",
    price: 1200,
    description:
      "Producto del ingenio y la visión de Bernandino Branca, nace en 1845 una bebida única para la época. Ella es resultado de la combinación de hierbas, cortezas, raíces, frutos y cuidado artesanal, a la que su creador bautizó con el nombre de fernet. Así nació Fernet Branca.",
    stock: 20,
    brand: "Branca",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/fernet-branca-1l1-22cf1c861e96c6bda515627818456812-480-0.jpg",
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
    description:
      "Nuestra 24.7 es una Session IPA, de amargor marcado otorgado por una combinación de lúpulos patagónicos. Con intenso aroma cítrico y frutal. El agregado de sauco y miel patagónicos balancean el amargor del lúpulo, aportando cierta acidez y final seco.",
    stock: 20,
    brand: "Patagonia",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/333611-43fba1b86f3b4c68d415671052502457-640-01-45fd310cca4964c3bd15918297820259-640-0.jpg",
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
    price: 8900,
    description:
      "El color, cuerpo y sabor característico del Jack Daniels se debe a un minucioso proceso que lo hace único.",
    stock: 8,
    brand: "Jack Daniels",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/unadjustednonraw_thumb_9bbb1-d5a6a59c05a65bb59016244773908078-480-0.jpg",
  },
]);
