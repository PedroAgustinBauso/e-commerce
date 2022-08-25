import React from "react";
import CartItem from "../components/CartItem";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { DonutLarge } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontSize: 30,
  color: theme.palette.text.primary,
  marginTop: 20,
}));


const Cart = () => {
  return (
    <div>
      <CartItem />
      <CartItem />
      <CartItem />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={20}>
          <Item>Total $0000</Item>
        </Stack>
      </Box>
    </div>
  );
};

export default Cart;
