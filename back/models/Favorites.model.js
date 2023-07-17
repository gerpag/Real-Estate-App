const sequelize = require("../config/db");
const Sequelize = require("sequelize");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    property_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    favorite_status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize, modelName: "favorites" }
);

module.exports = Favorites;
