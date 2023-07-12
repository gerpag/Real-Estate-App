import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Navbar() {



  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{ backgroundColor:"red" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Montserrat" }}
          >
            HOD.
          </Typography >
          <Button color="inherit"  >En Venta</Button>
          <Button color="inherit"  >Alquiler</Button>
          <Button color="inherit"  >Agenda tu visita</Button>
          <Button color="inherit"  >Nuestros servicios</Button>
          <Button color="inherit"  >Mi perfil</Button>
          <Button color="inherit"  >Nosotros</Button>
          <Button color="inherit"  >Contacto</Button>
          <Button color="inherit"  to={"/login"}
                  component={Link}>Ingresar</Button>
          <Button color="inherit"  to={"/register"}
                  component={Link}>Registro</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
