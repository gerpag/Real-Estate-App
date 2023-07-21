import React from "react";

const Background = ({ children }) => {
  const backgroundImageUrl =
    "https://media.lacapital.com.ar/p/3645d3cba9344c17cc7a158088cf58a9/adjuntos/205/imagenes/031/070/0031070579/642x0/smart/casas-pileta-2jpg.jpg";

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const contentStyle = {
    paddingTop: "150px", // Ajusta la distancia del contenido desde la parte superior de la página
    // Agrega otros estilos según tus necesidades
  };

  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Background;

