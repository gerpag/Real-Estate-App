const db = require("../config/db");
const Sequelize = require("sequelize");

class Property extends Sequelize.Model {}

Property.init(
  {
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    imgsUrl: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true,
      },
    },
    bathrooms: {
      type: Sequelize.INTEGER,
    },
    surface: {
      type: Sequelize.INTEGER,
    },
    operation: {
      type: Sequelize.TEXT,
    },
   
  },
  { sequelize: db, modelName: "property" }
);

module.exports = Property;
