import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUser } from "../state/user";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/api/user/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        credentials: "include",
      })
      .then(() => {
        dispatch(setUser(null));
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: user && user.admin ? "blue" : "red" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Montserrat" }}
          >
            HOD.
          </Typography>

          {user && user.admin == true ? (
            <>
              <Button color="inherit">Propiedades</Button>
              <Button color="inherit" to={"/adminSubmit"} component={Link}>
                Nueva propiedad{" "}
              </Button>
              <Button color="inherit">Usuarios</Button>
            </>
          ) : (
            <>
              <Button color="inherit">Venta</Button>
              <Button color="inherit">Alquiler</Button>
              <Button color="inherit">Nuestros servicios</Button>
              <Button color="inherit">Nosotros</Button>
              <Button color="inherit">Contacto</Button>{" "}
            </>
          )}
          {user && user.admin == false ? (
            <Button color="inherit">Agenda tu visita</Button>
          ) : undefined}

          {user ? (
            <>
              <Button color="inherit">Mi perfil</Button>
              <Button color="inherit" onClick={handleLogout}>
                Salir
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" to={"/login"} component={Link}>
                Ingresar
              </Button>
              <Button color="inherit" to={"/register"} component={Link}>
                Registro
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
