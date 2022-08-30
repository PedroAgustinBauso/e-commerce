import React from "react";
import CartItem from "../components/CartItem";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: 30,
  color: theme.palette.text.primary,
  marginTop: 20,
}));

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("CARRITO",cart);
  return (
    <div>
      <h1>Mi carrito</h1>
      {cart.map((product, i) => {
        return <CartItem product={product} />;
      })}
      <Box sx={{ width: "100%" }}>
        <Stack spacing={20}>
          <Item>{`TOTAL`}</Item>
        </Stack>
      </Box>
      <Button variant="contained">Finalizar compra</Button>
      <Link to="/">
        <Button variant="outlined">Seguir comprando</Button>
      </Link>
    </div>
  );
};

export default Cart;
