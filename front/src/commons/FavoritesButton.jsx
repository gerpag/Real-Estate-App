import React, { useState } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import {
  handleAddToFavorites,
  handleToggleFavorite,
} from "../services/favoritesServices";

const FavoritesButton = ({ user, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Button
      variant="contained"
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
      onClick={() => {
        handleToggleFavorite(isFavorite, setIsFavorite);
        handleAddToFavorites(user, id);
      }}
    >
      {isFavorite ? (
        <FavoriteIcon
          sx={{
            marginLeft: "5px",
            color: "yellow",
            border: "1px solid red",
            borderRadius: "50%",
            p: 0.3,
            mr: 0.5,
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            marginLeft: "5px",
            color: "blue",
            border: "1px solid red",
            borderRadius: "50%",
            p: 0.3,
            mr: 0.5,
          }}
        />
      )}
    </Button>
  );
};

export default FavoritesButton;
