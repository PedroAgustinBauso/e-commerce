import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendLogoutRequest } from "../store/user";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";

const NavbarUserLogged = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutNavbar = () => {
    dispatch(sendLogoutRequest());
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleCartNavbar = () => {
    navigate("/cart");
  };

  return (
    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
      <MenuItem onClick={null}>
        {/* TODO: Funcionalidad ir a perfil en progreso. */}
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.name[0]}</Avatar>
      </MenuItem>

      <MenuItem onClick={handleCartNavbar} style={{ textDecoration: "none", color: "white" }}>
        <ShoppingCartIcon />
      </MenuItem>

      <MenuItem onClick={handleLogoutNavbar}>
        <Typography textAlign="center">Salir</Typography>
      </MenuItem>
    </Box>
  );
};

export default NavbarUserLogged;
