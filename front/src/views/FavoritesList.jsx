import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, useParams } from "react-router-dom";

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const { userId } = useParams();
  console.log(favorites);

  const data2 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/property/all"
      );
      const data = response.data;

      setProperty(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/favorites/user/${userId}`
      );
      const data = response.data;
      setFavorites(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(userId);
    data2();
  }, []);
  const [property, setProperty] = useState([]);

  if (!favorites.length) {
    return <div>No hay propiedades marcadas como favoritas.</div>;
  }
  console.log("FAVORITES", favorites);

  const getInfoProperty = (propertyId) => {
    const propertyFound = property.find((prop) => prop.id === propertyId);
    return propertyFound
      ? `Ubiciación: ${propertyFound.location}, Precio: ${propertyFound.price}, Dirección ${propertyFound.address} `
      : "Datos no encontrados";
  };

  return (
    <div style={{ margin: "0 5%", backgroundColor: "white" }}>
      <h1>Lista de Propiedades Favoritas</h1>
      {favorites.map((favorite) => (
        <Card key={favorite} sx={{ maxWidth: 800, margin: "10px" }}>
          <CardContent>
            <h2>Propiedad</h2>
            <p> {getInfoProperty(favorite.propertyId)} </p>
            <Link to={`/property/${favorite.propertyId}`}>Ver detalles</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FavoritesList;
