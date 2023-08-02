import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs from "dayjs";

function AppointmentsButton({ propertyId }) {
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

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedHora("");
    setSelectedDia("");
    setPropertyN(propertyId);
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
        alert("Cita programada");
        handleClose();
      } else {
        alert(
          "Por favor, selecciona una hora y un día antes de agendar la cita."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      
     
      
        {user ? (
          <>
            <Button
              variant="contained"
              style={{
                border: "1px solid red",
               
                backgroundColor: "red",
              }}
              type="submit"
              onClick={() => handleClickOpen()}
            >
              Cita
            </Button>
          </>
        ) : null}
      
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

export default AppointmentsButton;
