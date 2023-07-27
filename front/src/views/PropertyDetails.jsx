import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
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

function PropertyDetails() {
  const navigate = useNavigate();
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
  
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const user = useSelector((state) => state.user);

  const handleClickOpen = () => {
    setOpen(true);
    ;
    setSelectedHora("");
    setSelectedDia("");
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
            id_propierty: property.id,
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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/property/${id}`
        );
        const data = response.data;
        setProperty(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!property) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div style={{ margin: "0 5%" }}>
        <Card
          sx={{
            maxWidth: 800,
            display: "flex",
            border: "1px solid blue",
            margin: "10px",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="330"
            width="200"
            image={property.imgsUrl}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <>
              {property.operation} {property.category}
            </>
            <h1>{property.location}</h1>
            {property.address}
            <p>{property.description}</p>
            <div>
              <AttachMoneyIcon />
              Precio:
              {property.price}
            </div>
            <div>
              <SquareFootIcon />
              Superficie:
              {property.surface} m2
            </div>
            <div>
              <BedIcon />
              Ambientes:
              {property.ambientes}
            </div>
            <div>
              <BathtubIcon />
              Baños :{property.bathrooms}
            </div>
          </CardContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "auto",
            }}
          >
            {user?.admin == false ? (
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
                  onClick={() => handleClickOpen()}
                >
                  Cita
                </Button>
              </>
            ) : null}
            <Button
              variant="contained"
              style={{
                border: user?.admin ? "1px solid blue" : "1px solid red",
                height: "100%",
                backgroundColor: user?.admin ? "blue" : "red",
              }}
              to={user?.admin ? "/property" : `/${property.operation}`}
              component={Link}
            >
              volver
            </Button>
          </Box>
        </Card>
      </div>{" "}
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

export default PropertyDetails;
