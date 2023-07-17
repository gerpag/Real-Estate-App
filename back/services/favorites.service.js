const Favorites = require("../models/Favorites");

async function getUserFavorites(userId) {
  return Favorites.findAll({ where: { userId } });
}

async function addFavorite(userId, propertyId) {
  return Favorites.findOrCreate({ userId, propertyId });
}

module.exports = { getUserFavorites, addFavorite };
