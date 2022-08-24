import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import classes from "./Grid.module.css";

const fakeDataVino = [
  {
    id: 1,
    name: "Potrillo Malbec",
    imagen:
      "https://cdn.shopify.com/s/files/1/0254/2947/5433/products/vino-portillo-malbec-01-750-siempreencasa_500x.png?v=1623935484?nocache=0.5350461058023577",
    price: 1000,
  },
];

const fakeDataCerveza = [
  {
    id: 2,
    name: "Pack Andes Ipa Pack x5 475ml",
    price: 1200,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/andes_ipa_1000x2048_f9c0fb04-5564-499b-b7df-3e65e3bb9c9c_grande1-834bfca25342359ea215914720299753-480-0.png",
  },
  {
    id: 3,
    name: "Botella Patagonia 24.7 750ml",
    price: 450,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/333611-43fba1b86f3b4c68d415671052502457-640-01-45fd310cca4964c3bd15918297820259-640-0.jpg",
  },
];

// To do. This returns fake data. It will be replaced with the call to the backend.
function getFakeProducts(category) {
  if (category === "vinos") return fakeDataVino;
  if (category === "cervezas") return fakeDataCerveza;
  return [];
}

const Grid = ({ category }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(getFakeProducts(category));
  }, [category]);

  return (
    <div>
        <h1 className={classes.gridTitle}>{category}</h1>
      <div className={classes.flexcontainer}>
        {productList.map((item) => (
          <div key={item.id} className={classes.flexitem}>
            <GridItem
              name={item.name}
              imagen={item.imagen}
              price={item.price}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
