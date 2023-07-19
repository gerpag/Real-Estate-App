import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

function Propiedad() {
  const [property, setProperty] = useState(null);
  const { id } = useParams()
  const data = async () => {
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
  useEffect(() => {
    data();
  }, []);


  const handleDelete = async (id) => {
    
    try {
      await axios.delete(`http://localhost:3001/api/admin/delete/${id}`);
     data()
    } catch (error) {
      console.error(error);
    }
  };

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
                image={property.imgsUrl || "placeholder.jpg"}
                sx={{
                  alignSelf: "flex-start",
                  borderRight: "1px solid blue",
                  objectFit: "cover",
                  width: "180px",
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
                  <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <div style={{ border: "1px solid blue", height: "100%" }}>
                      {property.price}
                    </div>
                    <div style={{ border: "1px solid blue", height: "100%" }}>
                      {property.location}
                    </div>
                  </Box>
                  <Box
                    sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                  >
                    <div style={{ border: "1px solid blue", height: "100%" }}>
                      {property.surface}
                    </div>
                    <div style={{ border: "1px solid blue", height: "100%" }}>
                      {property.ambientes}
                    </div>
                    <div style={{ border: "1px solid blue", height: "100%" }}>
                      {property.bathrooms}
                    </div>
                  </Box>
                  <div style={{ border: "1px solid blue", height: "100%" }}>
                    {property.description}
                  </div>

                  <Box
                    sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                  >
                    <Button  variant="contained"
                      style={{ border: "1px solid blue", height: "100%" }}
                    >
                      Editar
                    </Button>
                    <Button variant="contained"
                      style={{ border: "1px solid blue", height: "100%" }}
                      onClick={() => handleDelete(property.id)}
                      type="submit"
                    >
                      Eliminar
                    </Button>
                    <Button variant="contained"
                      style={{ border: "1px solid blue", height: "100%" }}
                    >
                      Ver más
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))} </Box></div>
    </>
  );
}

export default Propiedad;













