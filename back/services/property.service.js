const Property = require("../models/Property.model")


async function getPropertytByCategory(operation) {
  return Property.findAll({ where: { operation } });
}

async function getAllProperty() {
  return Property.findAll()
}

module.exports = {getPropertytByCategory,getAllProperty}