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

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

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
    <div style={{ margin: "0 5%" }}>
      <Card
        sx={{
          maxWidth: 800,
          display: "flex",
          border: "1px solid blue",
          margin: "10px",
          flexDirection: "column", // Añadimos esta propiedad para colocar los botones debajo del contenido
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
            marginTop: "auto", // Colocamos los botones en la parte inferior del contenedor
          }}
        >
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
          >
            Cita
          </Button>
          <Button
            variant="contained"
            style={{
              border: "1px solid red",
              height: "100%",
              backgroundColor: "red",
            }}
            to={`/${property.operation}`}
            component={Link}
          >
            volver
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default PropertyDetails;
