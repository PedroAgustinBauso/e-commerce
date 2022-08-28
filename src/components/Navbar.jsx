import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const categoriesList = [
    "Vinos",
    "Cervezas",
    "Espumantes",
    "Licores",
    "Gin",
    "Vodka",
    "Ron",
    "Aperitivos",
    "Whisky",
    "Otros",
  ];

  function getCategoryPages() {
    let categories = []
    categoriesList.forEach((element) => {
      categories.push({
        page: element,
        onClickHandler: function () {
          handleCloseCategories();
          handleCloseNavMenu();
          navigate(`/${element.toLocaleLowerCase()}`);
        },
      });
    });
    return categories;
  }

  /*** Start Hamburger Menu functionality ***/
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  /*** End Hamburger Menu functionality ***/

  /*** Start Dropdown categories functionality ***/
  const [anchorCategoriesDropDown, setAnchorCategoriesDropDown] =
    React.useState(null);
  const openCategoriesDropDown = Boolean(anchorCategoriesDropDown);
  const handleClickCategories = (event) => {
    setAnchorCategoriesDropDown(event.currentTarget);
  };
  const handleCloseCategories = () => {
    setAnchorCategoriesDropDown(null);
  };
  /*** End Dropdown categories functionality ***/

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BBT-TODO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {getCategoryPages().map((item) => (
                <MenuItem key={item.page} onClick={item.onClickHandler}>
                  <Typography textAlign="center">{item.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BBT-TODO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              id="basic-button"
              aria-controls={openCategoriesDropDown ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openCategoriesDropDown ? "true" : undefined}
              onClick={handleClickCategories}
              style={{ color: "white" }}
            >
              Categorías
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorCategoriesDropDown}
              open={openCategoriesDropDown}
              onClose={handleCloseCategories}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getCategoryPages().map((item) => (
                <MenuItem key={item.page} onClick={item.onClickHandler}>
                  <Typography textAlign="center">{item.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            <MenuItem>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                <Typography textAlign="center">Login</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ShoppingCartIcon />
              </Link>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
