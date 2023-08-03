const Sequelize = require("sequelize");
require("dotenv").config();

const userDb = process.env.USER_DB;
const nameDb = process.env.NAME_DB;
const pass = process.env.PASS_DB;
const host = process.env.HOST;

const db = new Sequelize(nameDb, null, null, {
  host: host,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
