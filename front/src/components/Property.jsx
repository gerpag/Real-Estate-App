import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";



function Propiedad() {
  return (
    <>
<Card sx={{ maxWidth: 530, height: 200, border: '1px solid blue' }}>
  <Box sx={{ display: 'flex', height: '100%' }}>
    <CardMedia
      component="img"
      height="100%"
      width="200"
      image=""
      sx={{ alignSelf: 'flex-start', borderRight: '1px solid blue' }}
    />
    <CardContent sx={{ height: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', width: '330px', height: '100%' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ border: '1px solid blue', height: '100%' }}>precio</div>
          <div style={{ border: '1px solid blue', height: '100%' }}>ciudad</div>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div style={{ border: '1px solid blue', height: '100%' }}>superficie</div>
          <div style={{ border: '1px solid blue', height: '100%' }}>dormitorio</div>
          <div style={{ border: '1px solid blue', height: '100%' }}>baños</div>
        </Box>
        <div style={{ border: '1px solid blue', height: '100%' }}>descripcion</div>
        <div style={{ border: '1px solid blue', height: '100%' }}>funciones</div>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <button style={{ border: '1px solid blue', height: '100%' }}>Favoritos</button>
          <button style={{ border: '1px solid blue', height: '100%' }}>Cita</button>
          <button style={{ border: '1px solid blue', height: '100%' }}>Ver más</button>
        </Box>
      </Box>
    </CardContent>
  </Box>
</Card>





   </>
  );
}
export default Propiedad;


