import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import styles from "./CartItem.module.css"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CartItem({product}) {
  console.log(product)
  const precioUnitario = 1000;
 // setCantidad = () => {precio * cantidad}
  const [cantidad, setCantidad] = useState(1);

  const handleSelectChange = (e) => {
    setCantidad(e.target.value)
  };


  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: 3,
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="foto producto"
              src={`${product.img}`}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description.slice(0,80 )}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Eliminar
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Precio unitario.....${product.price}
              <br/>
              <br/>
              Precio...................${product.total}
            </Typography>
          </Grid>
        </Grid>

            <Box sx={{ minWidth: 10, maxWidth: 50 }} className={styles.cantidad} onChange = {handleSelectChange}>
              <FormControl >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Cantidad
                </InputLabel>
                <NativeSelect
                  defaultValue={cantidad}
/*                   inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }} */
                  
                >

                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </NativeSelect>
              </FormControl>
            </Box>

      </Grid>
    </Paper>
  );
}
