import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const handleAddToFavorites = async (user, propertyId) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/favorites/add/${user.id}/${propertyId}`,
      {}
    );

    toast.success(`Propiedad agregada a favoritos`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    console.error("Error al agregar propiedad a favoritos:", error);
  }
};

export const handleToggleFavorite = (isFavorite, setIsFavorite) => {
  setIsFavorite((prevIsFavorite) => !prevIsFavorite);
};
