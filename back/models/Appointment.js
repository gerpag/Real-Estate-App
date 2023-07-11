
const db = require("../config/db");
const Sequelize = require("sequelize");

class Appointments extends Sequelize.Model {}

Appointments.init(
  {
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    hour: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    id_propierty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    confirmation: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "appointments" }
);

module.exports = Appointments;