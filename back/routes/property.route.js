const express = require("express");
const propertyRouter = express.Router();
const propertyController = require("../controllers/property.controller")


propertyRouter.get("/category/:name", propertyController.getPropertyByCategory);

propertyRouter.get("/all",propertyController.getAllProperty)

module.exports = propertyRouter
