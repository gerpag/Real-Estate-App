const propertyService = require("../services/property.service");

exports.getPropertyByCategory = async (req, res) => {
  try {
    const name = req.params.name;
    const property = await propertyService.getPropertytByCategory(name);
    return res.status(200).send(property);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};

exports.getAllProperty = async (req, res) => {
  try {
    const properties = await propertyService.getAllProperty();
    return res.status(200).send(properties);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};