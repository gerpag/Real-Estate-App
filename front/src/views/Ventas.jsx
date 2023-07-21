import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Button from "@mui/material/Button";
import { Link} from "react-router-dom";


function Ventas() {
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
                    image={property.imgsUrl }
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
                        <div style={{ border: "1px solid blue", height: "100%" }}>
                                {<  AttachMoneyIcon />} { property.price}
                        </div>
                        <div style={{ border: "1px solid blue", height: "100%" }}>
                                 {<LocationOnIcon />}{property.location}
                        </div>
                      </Box>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        <div style={{ border: "1px solid blue", height: "100%" }}>
                         {<SquareFootIcon />} {property.surface}  m2
                        </div>
                        <div style={{ border: "1px solid blue", height: "100%" }}>
                          {<BedIcon/>}   {property.ambientes}
                        </div>
                        <div style={{ border: "1px solid blue", height: "100%" }}>
                          {<BathtubIcon />}  {property.bathrooms}
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
                        <Button
                          variant="contained"
                          style={{ border: "1px solid red", height: "100%",backgroundColor:"red" }}
                          
                        >
                          Favorito
                        </Button>
                        <Button
                          variant="contained"
                          style={{ border: "1px solid red", height: "100%",backgroundColor:"red" }}
                          
                          type="submit"
                        >
                          Cita
                        </Button>
                        <Button
                          variant="contained"
                          style={{ border: "1px solid red", height: "100%",backgroundColor:"red" }}
                          to={`/property/${property.id}`} component={Link}
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
    </>
  );
}

export default Ventas;

