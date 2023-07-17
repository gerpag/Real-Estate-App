const Favorites = require("../models/Favorites.model");

async function getUserFavorites(userId) {
  return Favorites.findAll({ where: { userId } });
}

async function addFavorite(userId, propertyId) {
  return Favorites.findOrCreate({ userId, propertyId });
}

async function removeFavorite(favoriteId) {
  return Favorites.destroy({ where: { id: favoriteId } });
}

module.exports = { getUserFavorites, addFavorite, removeFavorite };
