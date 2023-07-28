const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const favoritesRouter = require("./favorites.route");

const adminRouter = require("./admin.route");
const propertyRouter = require("./property.route");
const appointmentRouter = require("./appointment");

router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/admin", adminRouter);
router.use("/property", propertyRouter);
router.use("/appointment", appointmentRouter);

//ruta sólo para probar en postman
router.get("/properties", async (req, res) => {
  const properties = await Property.findAll();
  res.json(properties);
});

module.exports = router;
