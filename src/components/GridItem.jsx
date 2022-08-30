import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const GridItem = ({ name, images, price, id, description }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="250"
          image={images}
          alt="green iguana"
        />
        <hr border="none" border-top="1px" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 50) + "..."}
          </Typography>
        </CardContent>
      </Link>
      <Button variant="contained" startIcon={<AddShoppingCartIcon />}></Button>
    </Card>
  );
};

export default GridItem;
