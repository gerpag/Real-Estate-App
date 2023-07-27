import axios from "axios";

export const handleAddToFavorites = async (user, id) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/favorites/user/${user.id}/add`,
      { propertyId: id }
    );
    alert("Propiedad agregada a favoritos:", response.data);
  } catch (error) {
    console.error("Error al agregar propiedad a favoritos:", error);
  }
};

export const handleToggleFavorite = (isFavorite, setIsFavorite) => {
  setIsFavorite((prevIsFavorite) => !prevIsFavorite);
};
