import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

function Alquiler() {
  const navigate = useNavigate()
  const hora = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const fechaActual = dayjs();

  const diasProximos30 = [];

  let contador = 0;

  while (contador < 30) {
    const dia = fechaActual.add(contador, "day").format("M/D/YYYY");
    diasProximos30.push(dia);
    contador++;
  }

  const [selectedHora, setSelectedHora] = useState("");
  const [selectedDia, setSelectedDia] = useState("");
  const [propertyN, setPropertyN] = useState("");
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState(null);

  const data = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/property/category/Alquiler"
      );
      const data = response.data;
      setProperty(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOpen = (propertyId) => {
    setOpen(true);
    setPropertyN(propertyId);
    setSelectedHora("")
    setSelectedDia("")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitAppointment = async () => {
    try {
      if (selectedHora && selectedDia) {
        const response = await axios.post(
          "http://localhost:3001/api/appointment/submit",
          {
            id_user: user.id,
            date: selectedDia,
            hour: selectedHora,
            id_propierty: propertyN,
          }
        );

        navigate("/");
      } else {
        alert(
          "Por favor, selecciona una hora y un día antes de agendar la cita."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div style={{ margin: "0 5%" }}>
        <Box display="flex" flexWrap="wrap">
          {property &&
            property.map((property, index) => (
              <Card
                key={property.id}
                sx={{
                  maxWidth: 530,
                  height: 200,
                  border: "1px solid blue",
                  margin: "10px",
                }}
              >
                <Box sx={{ display: "flex", height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="200"
                    image={property.imgsUrl}
                    sx={{
                      alignSelf: "flex-start",
                      borderRight: "1px solid blue",
                      objectFit: "cover",
                      width: "160px",
                    }}
                  />
                  <CardContent sx={{ height: "100%" }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateRows: "repeat(5, 1fr)",
                        width: "330px",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                      >
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <AttachMoneyIcon /> {property.price}
                        </div>
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <LocationOnIcon />
                          {property.location}
                        </div>
                      </Box>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <SquareFootIcon /> {property.surface} m2
                        </div>
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <BedIcon /> {property.ambientes}
                        </div>
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <BathtubIcon /> {property.bathrooms}
                        </div>
                      </Box>
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {property.description}
                      </div>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        {user ? (
                          <>
                            <Button
                              variant="contained"
                              style={{
                                border: "1px solid red",
                                height: "100%",
                                backgroundColor: "red",
                              }}
                            >
                              Favorito
                            </Button>
                            <Button
                              variant="contained"
                              style={{
                                border: "1px solid red",
                                height: "100%",
                                backgroundColor: "red",
                              }}
                              type="submit"
                              onClick={() => handleClickOpen(property.id)}
                            >
                              Cita
                            </Button>
                          </>
                        ) : null}

                        <Button
                          variant="contained"
                          style={{
                            border: "1px solid red",
                            height: "100%",
                            backgroundColor: "red",
                          }}
                          to={`/property/${property.id}`}
                          component={Link}
                        >
                          Ver más
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            ))}
        </Box>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agendar Cita</DialogTitle>
        {
          <DialogContent>
            <Autocomplete
              value={selectedHora}
              onChange={(event, newValue) => {
                setSelectedHora(newValue);
              }}
              id="controllable-states-demo"
              options={hora}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Hora" />}
            />
            <Autocomplete
              value={selectedDia}
              onChange={(event, newValue) => {
                setSelectedDia(newValue);
              }}
              id="controllable-states-demo"
              options={diasProximos30}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Dia" />}
            />
          </DialogContent>
        }
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={submitAppointment}>Agendar Cita</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Alquiler;
