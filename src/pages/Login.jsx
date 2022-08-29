import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { sendLoginRequest } from "../store/user";
import AlertMessage from "../commons/AlertMessage";

import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  // inicio proceso de login
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // configuracion de react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle login
  const onSubmit = (data) => {
    console.log(data);
    dispatch(sendLoginRequest(data))
      .then(({ payload }) => {
        console.log("PAYLOAD ES", payload);
        if (payload) {
          setLoginStatus("success");
          setTimeout(() => navigate("/"), 3000);
        } else {
          setLoginStatus("error");
          setTimeout(() => setLoginStatus(""), 3000);
          reset();
        }
      })
      .catch(() => navigate("/404"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Iniciar sesion
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              autoFocus
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail no válido",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Contraseña"
              type="password"
              id="contraseña"
              {...register("password", {
                required: "Required field",
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesion
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="register" variant="body2">
                  {"No tenes cuenta? Registrate!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
      {loginStatus && (
        <AlertMessage
          type={loginStatus}
          message={
            loginStatus === "success"
              ? `Bienvenid@ al sitio!`
              : `Por favor verifique sus credenciales`
          }
        />
      )}
    </Container>
  );
}
