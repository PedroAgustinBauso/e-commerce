const { Product } = require("../models");

Product.bulkCreate([
  {
    name: "Pack Andes Ipa Pack x5 475ml",
    categoryId: 2,
    price: 1200,
    description:
      "La Andes IPA Andina es una cerveza estilo IPA, valga la redundancia, de la escuela Inglesa. Como seguramente usted sabe, este estilo de cerveza se caracteriza por el amargor que le otorga su alto contenido de lúpulo.",
    stock: 20,
    brand: "Andes",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/675/products/and1-2c855b2a7f4839a46e16096851750218-640-0.jpg",
  },
  {
    name: "Paulaner Weissbier Lata 500ml",
    categoryId: 2,
    price: 790,
    description:
      "Es considerada la cerveza de trigo número 1 en Alemania y una de las favoritas del mundo. Una obra maestra elaborada por expertos, mediante una técnica perfeccionada por los maestros cerveceros de Paulaner llamada suspensión de levadura, que da como resultado un aspecto uniforme, ligeramente turbio, una calidad constante y un sabor perfecto.",
    stock: 20,
    brand: "Paulaner",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/3300701-f3b7aa6eddc7d781f915755587555671-640-01-5b40aabc2ddc2f587915918300349161-640-0.jpg",
  },
  {
    name: "Stella Artois Lata 269ml",
    categoryId: 2,
    price: 200,
    description:
      "Es una cerveza muy equilibrada de un color dorado brillante. En esta cerveza predominan moderadas notas a frutas blancas y de cereal que resaltan levemente sobre el aroma herbal del lúpulo Saaz. En boca presenta una sensación suave, ligera de amargo y con efecto refrescante. La Stella Artois es ideal para acompañar quesos, pastas y carnes con salas de cítricos o ensaladas afrutadas.",
    stock: 20,
    brand: "Stella Artois",
    images:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-stella-artois-belgium-269_C-siempreencasa_500x.png?v=1637180550?nocache=0.5602055357686924",
  },
  {
    name: "Fernet Branca 710ml",
    categoryId: 10,
    price: 1200,
    description:
      "Producto del ingenio y la visión de Bernandino Branca, nace en 1845 una bebida única para la época. Ella es resultado de la combinación de hierbas, cortezas, raíces, frutos y cuidado artesanal, a la que su creador bautizó con el nombre de fernet. Así nació Fernet Branca.",
    stock: 20,
    brand: "Branca",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/fernet-brancamenta-750ml1-4cd7f4771af031369a15627817288255-480-0.jpg",
  },
  {
    name: "Fernet Branca 1L",
    categoryId: 10,
    price: 1900,
    description: "Fernet fernet brranca branca branca",
    stock: 20,
    brand: "Branca",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/fernet-branca-1l1-22cf1c861e96c6bda515627818456812-480-0.jpg",
  },
  {
    name: "Botella Patagonia 24.7 750ml",
    categoryId: 2,
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
    categoryId: 8,
    price: 1300,
    description: "Botella Gancia Botella Gancia Botella Gancia",
    stock: 2,
    brand: "Gancia",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/gancia-950ml1-6ccf34584bd8855e3215627816837011-480-0.jpg",
  },
  {
    name: "Jack Daniels",
    categoryId: 10,
    price: 8900,
    description:
      "El color, cuerpo y sabor característico del Jack Daniels se debe a un minucioso proceso que lo hace único.",
    stock: 8,
    brand: "Jack Daniels",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/unadjustednonraw_thumb_9bbb1-d5a6a59c05a65bb59016244773908078-480-0.jpg",
  },
  {
    name: "Mastrantonio 63 Petit Verdot",
    categoryId: 1,
    price: 2500,
    description:
      "Color Rojo profundo con tintes grante. Aromas a Frutas rojas, especias y tostados intensas pero elegantes.Entrada de boca seco, se percibe un vino complejo y elegante, con taninos dulces y rugosos con un cuerpo sedosos y de buena acidez.",
    stock: 10,
    brand: "Bodega Familia Mastrantonio",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/mastrantonio-63-premium-petit-verdot-750ml1-f93c993493f647fdc516573816053885-480-0.jpg",
  },
  {
    name: "Zaha Malbec",
    categoryId: 1,
    price: 3000,
    description:
      "Color Rojo profundo con tintes violáceos. Aromas a Frutas rojas, florales y vegetales bien amalgamadas.",
    stock: 5,
    brand: "Bodega Teho",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/zaha-malbec1-b006de289dfcd8c3fa16573815230668-640-0.png",
  },
  {
    name: "Norton Cosecha Tardía",
    categoryId: 1,
    price: 700,
    description: "Ideal para aquellos que quieren incursionar en los vinos.",
    stock: 5,
    brand: "Bodega Norton",
    images:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/tardia_mrkvfd1-70f19628a2226ecc1115918287459152-640-0.jpg",
  },
]);
