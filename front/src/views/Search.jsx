import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Radio from "@mui/material/Radio";
import { border } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";

function Search() {
  const [property, setProperty] = useState(null);
  const [searchType, setSearchType] = useState("venta");

  const [filteredProperties, setFilteredProperties] = useState([]);

  const [propertyType, setPropertyType] = useState("casa");
  const data = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/property/category/${searchType}`
      );
      const data = response.data;
      setProperty(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data();
  }, [searchType]);

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };
  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const propertyTypeOptions = [
    "Departamento",
    "PH",
    "Casa",
    "Terreno",
    "Local",
  ];
  const handleSearch = () => {
    const filteredByType = property
      ? property.filter((prop) => prop.category === propertyType)
      : [];
  
    const filteredProps = filteredByType
      ? filteredByType.filter((prop) => {
          if (propertyType === "casa") return true;
          return prop.category === propertyType;
        })
      : [];
  console.log(propertyType)
    setFilteredProperties(filteredProps);
  };
  
  return (
    <>
      <div style={{ margin: "0 5%" }}>
        <Box
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "375.17px",
            height: "300px",
            border: "1px solid blue",
            marginTop: "145px",
            marginLeft: "130px",
          }}
        >
          <Box
            style={{
              marginTop: "75px",
              marginLeft: "50px",
            }}
          >
            <Box
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                border: "solid 1px blue",
                height: "30px",
                width: "75%",
              }}
            >
              Que estas buscando
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                border: "solid 1px blue",
                height: "30px",
                width: "75%",
              }}
            >
              <Radio
                value="venta"
                checked={searchType === "Venta"}
                onChange={() => handleSearchTypeChange("Venta")}
              />
              <span>Venta</span>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                border: "solid 1px blue",
                height: "30px",
                width: "75%",
              }}
            >
              <Radio
                value="alquiler"
                checked={searchType === "Alquiler"}
                onChange={() => handleSearchTypeChange("Alquiler")}
              />
              <span>Alquiler</span>
            </Box>
            <Box>
              <TextField
                select
                label="Tipo de Propiedad"
                value={propertyType}
                onChange={handlePropertyTypeChange}
                variant="outlined"
                sx={{ minWidth: "150px" }}
              >
                {propertyTypeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Button onClick={handleSearch}>Ver Propiedades</Button>
          </Box>
        </Box>

        <Box display="flex" flexWrap="wrap">
          {filteredProperties.map((property) => (
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
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {<AttachMoneyIcon />} {property.price}
                      </div>
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {<LocationOnIcon />}
                        {property.location}
                      </div>
                    </Box>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                      }}
                    >
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {<SquareFootIcon />} {property.surface} m2
                      </div>
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {<BedIcon />} {property.ambientes}
                      </div>
                      <div style={{ border: "1px solid blue", height: "100%" }}>
                        {<BathtubIcon />} {property.bathrooms}
                      </div>
                    </Box>
                    <div style={{ border: "1px solid blue", height: "100%" }}>
                      {property.description}
                    </div>
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

export default Search;
