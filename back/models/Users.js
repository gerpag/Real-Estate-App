const db = require("../config/db");
const Sequelize = require("sequelize");

class Users extends Sequelize.Model {}

Users.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    favorites: {
      type: Sequelize.ARRAY,
      
    },
    appointments: {
      type: Sequelize.ARRAY,
      
    },
    
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = Users;