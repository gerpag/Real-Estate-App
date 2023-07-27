import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, useParams } from "react-router-dom";

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
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

    fetchData();
  }, [userId]);

  if (!favorites.length) {
    return <div>No hay propiedades marcadas como favoritas.</div>;
  }
  console.log(favorites);
  return (
    <div style={{ margin: "0 5%" }}>
      <h1>Lista de Propiedades Favoritas</h1>
      {favorites.map((favorite) => (
        <Card key={favorite.id} sx={{ maxWidth: 800, margin: "10px" }}>
          <CardContent>
            <h2>{favorite.property.name}</h2>
            <p>{favorite.property.address}</p>
            <Link to={`/property/${favorite.property.id}`}>Ver detalles</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FavoritesList;
