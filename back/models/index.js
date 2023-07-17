const Appointments = require("./Appointment.model");
const Property = require("./Property.model");
const User = require("./User.model");
const Favorites = require("./Favorites.model");

Favorites.belongsTo(User, { foreignKey: "userId" });

module.exports = { Appointments, Property, User, Favorites };
