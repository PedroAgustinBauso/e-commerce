import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function SingleProductView() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        spacing={1}
        columns={16}
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={5}
        // border={5}
        // borderColor={"blue"}
      >
        <Grid
          item
          xs={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
          // border={5}
          // borderColor={"red"}
        >
          <Box sx={{ bgcolor: "white", height: "500" }}>
            <img
              alt="Producto foto"
              src="https://m.media-amazon.com/images/I/81T9ClEfccL._AC_SL1500_.jpg"
              height={"500"}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    Fernet Branca
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="h6" component="div">
                    $1000
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                Descripcion de producto Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ad, dignissimos! Voluptatum temporibus
                praesentium, ipsa officiis sapiente excepturi quos quasi
                similique quia. Aperiam similique molestiae delectus a error
                voluptatibus assumenda quasi?
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
              <Typography gutterBottom variant="body1">
                Categorias
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Cat Uno" />
                <Chip label="Cat Dos" />
                <Chip label="Cat Tres" />
                <Chip label="Cat Cuatro" />
              </Stack>
              <Typography mt={2} gutterBottom variant="body1">
                Cantidad
              </Typography>
              <Chip label="Cantidad de articulos disponibles" />
            </Box>
            <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
              <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
                Agregar al carrito
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
