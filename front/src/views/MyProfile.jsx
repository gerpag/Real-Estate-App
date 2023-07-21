import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function MyProfile() {
  const user = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
    foto: "",
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3001/api/user/${user.id}/profile`, {
          withCredentials: true,
          credentials: "include",
        })
        .then((response) => {
          setUserData(response.data);
          console.log(userData.lastmame);
        })

        .catch((error) => {
          console.error("Error al obtener los datos del usuario", error);
        });
    }
  }, [user]);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserData({ ...userData, [name]: value });
  //   console.log(userData);
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Aquí puedes realizar la lógica para guardar los cambios en el perfil del usuario

    axios
      .put(`http://localhost:3001/api/user/${user.id}/profile`, userData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log("Perfil actualizado:", response.data);
      })
      .catch((error) => {
        console.error("Error al actualizar el perfil", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt="Foto de Perfil"
          src={userData.foto}
        />
        <Typography variant="h5" mt={2}>
          {userData.nombre} {userData.apellido}
        </Typography>
      </Box>

      <Box
        component="form"
        mt={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Nombre"
          name="nombre"
          value={userData.name}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Apellido"
          name="apellido"
          value={userData.lastmame}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={userData.phone}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Contraseña"
          name="contraseña"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="URL de Foto"
          name="foto"
          value={userData.foto}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveChanges}
          mt={2}
        >
          Guardar Cambios
        </Button>
      </Box>
    </Container>
  );
}

export default MyProfile;
