import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import classes from "./Grid.module.css";
import axios from "axios";

const Grid = ({ category }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log("entré por error");
      });
  }, [category]);

  return (
    <div>
      <h1 className={classes.gridTitle}>
        {category === "none" ? "" : category}
      </h1>
      <div className={classes.flexcontainer}>
        {productList.map((item) => (
          <div key={item.id} className={classes.flexitem}>
            <GridItem
              name={item.name}
              images={item.images}
              price={`$ ${item.price}`}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
