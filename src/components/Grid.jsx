import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import classes from "./Grid.module.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
//import { useLocation, useParams } from "react-router-dom";
import usePagination from "./Pagination/usePagination";
import Stack from "@mui/material/Stack";

const Grid = ({ category }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/products/${
          category === "none" ? "" : category
        }`
      )
      .then((response) => {
        console.log(response);
        setProductList(response.data);
      })
      .catch((error) => {
        console.log("entré por error");
      });
  }, [category]);

  const [page, setPage] = React.useState(1);
  const per_page = 12;

  const count = Math.ceil(productList.length / per_page);

  const _DATA = usePagination(productList, per_page);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

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
        {_DATA.currentData().map((item) => (
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
      <Stack spacing={2}>
        <Pagination
          page={page}
          count={count}
          style={{ display: "flex", justifyContent: "center" }}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default Grid;
