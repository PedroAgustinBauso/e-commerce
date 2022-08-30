import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import classes from "./Grid.module.css";
import axios from "axios";
//import { useLocation, useParams } from "react-router-dom";

const Grid = ({ category }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/products/${category === "none" ? '' : category}`)
    .then((response) => {
      console.log(response)
      setProductList(response.data);
    })
    .catch((error) => {
      console.log("entré por error");
    });
    
  }, [category]);

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     axios
  //     .get("http://localhost:3001/api/products")
  //     .then((response) => {
  //       setProductList(response.data);
  //       console.log("response data local home", response.data)
  //     })
  //     .catch((error) => {
  //       console.log("entré por error");
  //     });
  //   } else if (location.pathname === "vinos") {
  //     axios
  //     .get("http://localhost:3001/api/products/Vinos")
  //     .then((response) => {
  //       setProductList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("entré por error");
  //     });
  //   }
    
  // }, []);

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
              description={`${item.description}`}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
