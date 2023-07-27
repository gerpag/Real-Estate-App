import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
        }
      );

      alert("Login successful");
      const userData = response.data;
      dispatch(setUser(userData));

      const meResponse = await axios.get("http://localhost:3001/api/user/me", {
        withCredentials: true,
        credentials: "include",
      });

      const meData = meResponse.data;
      dispatch(setUser(meData));

      navigate("/");
    } catch (error) {
      alert("Could not login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Grid container>
        <Card
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            margin: "0 auto",
          }}
        >
          <CardContent>
            <Box onSubmit={handleLoginSubmit} component="form">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Correo electronico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setLoginEmail(e.target.value)}
                    value={loginEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
                  />
                </Grid>
                ¿Olvidaste tu contraseña?
                <Grid item xs={12}>
                  <Button sx={{}} type="submit" variant="outlined">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Login;
