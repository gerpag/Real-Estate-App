const favoritesService = require("../services/favorites.service");
const userService = require("../services/user.service");

exports.getAllFavorites = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userService.getUserById(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const favorites = await favoritesService.getUserFavorites(userId);
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los favoritos del usuario" });
  }
};

exports.addFavorite = async (req, res) => {
  const { userId } = req.params;
  const { propertyId } = req.body;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const favorite = favoritesService.addFavorite(userId, propertyId);
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar a lista de favoritos " });
  }
};
