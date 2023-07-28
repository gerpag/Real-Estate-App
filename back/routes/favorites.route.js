const express = require("express");
const favoritesRouter = express.Router();
const favoritesController = require("../controllers/favorites.controller");

favoritesRouter.get("/user/:userId", favoritesController.getUserFavorites);

favoritesRouter.post(
  "/add/:userId/:propertyId",
  favoritesController.addFavorite
);

favoritesRouter.delete("/user/:userId/:id", favoritesController.removeFavorite);

module.exports = favoritesRouter;
