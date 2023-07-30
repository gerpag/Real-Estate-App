import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import ButtonsProperty from "../components/ButtonsProperty";

function Ventas() {
  
 

  const user = useSelector((state) => state.user);
 
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
      <div style={{ margin: "0 5%" }}>
        <Box
          sx={{
            background: "white",
            maxWidth: 1065,
            height: 48,
            border: "1px solid blue",
            margin: "10px",
            display: "flex",
            alignItems: "flex-end",
            fontFamily: "Montserrat, sans-serif",
            justifyContent: "space-between",
            paddingLeft: "5px",
            borderBottom: "1px solid blue",
            fontSize: "17px",
            color: "blue",
          }}
        >
          PROPIEDAD EN VENTA
        </Box>
        <Box display="flex" flexWrap="wrap">
          {property &&
            property.map((propertyIten, index) => (
              <Card
                key={propertyIten.id}
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
                    image={propertyIten.imgsUrl}
    
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
                          <AttachMoneyIcon /> {propertyIten.price}
                        </div>
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <LocationOnIcon />
                          {propertyIten.location}
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
                          <SquareFootIcon /> {propertyIten.surface} m2
                        </div>
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <BedIcon /> {propertyIten.ambientes}
                        </div>
                        <div
                          style={{ border: "1px solid blue", height: "100%" }}
                        >
                          <BathtubIcon /> {propertyIten.bathrooms}
                        </div>
                      </Box>
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {propertyIten.description}
                      </div>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      ><ButtonsProperty propertyId={propertyIten.id}/>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            ))}
        </Box>
      </div>
   
    </>
  );
}

export default Ventas;
