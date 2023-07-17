const express = require("express");
const favoritesRouter = express.Router();

favoritesRouter.get(
  "/user/:userId/favorites",
  favoritesController.getUserFavorites
);

favoritesRouter.post(
  "/user/:userId/favorites/add",
  favoritesController.addFavorite
);
