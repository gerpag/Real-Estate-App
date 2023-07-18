const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const favoritesRouter = require("./favorites.route");
const adminRouter = require("./admin.route");
const Property = require("../models/Property.model");

router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/admin", adminRouter);
//ruta sólo para probar en postman
router.get("/properties", async (req, res) => {
  const properties = await Property.findAll();
  res.json(properties);
});
module.exports = router;
