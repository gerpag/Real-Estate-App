
import axios from "axios";

export const handleDeleteFavorite = async (
  userId,
  favoriteId,
  setFavorites
) => {
  try {
    await axios.delete(
      `http://localhost:3001/api/favorites/remove/${userId}/${favoriteId}`
    );

    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== favoriteId)
    );
  } catch (error) {
    console.error("Error al eliminar favorito:", error);
  }
};

