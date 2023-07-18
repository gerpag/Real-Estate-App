import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

function Venta() {
  const [property, setProperty] = useState(null);
  const data = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/property/category/Venta"
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
 
  return (
    <>


{property && property.map((property, index) => ( 
        <Card sx={{ maxWidth: 530, height: 200, border: "1px solid blue" }}>
          <Box sx={{ display: "flex", height: "100%" }}>
            <CardMedia
              component="img"
              height="100%"
              width="200"
              image= {property.imgsUrl}
              sx={{ alignSelf: "flex-start", borderRight: "1px solid blue" }}
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
                  <button style={{ border: "1px solid blue", height: "100%" }}>
                    Favoritos
                  </button>
                  <button style={{ border: "1px solid blue", height: "100%" }}>
                    Cita
                  </button>
                  <button style={{ border: "1px solid blue", height: "100%" }}>
                    Ver más
                  </button>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
     ) )} 
    </>
  );
}

export default Venta;
