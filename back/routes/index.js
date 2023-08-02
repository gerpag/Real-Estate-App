const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const favoritesRouter = require("./favorites.route");

const adminRouter = require("./admin.route");
const propertyRouter = require("./property.route");
const appointmentRouter = require("./appointment");
const emailRouter = require("./email.route");

router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/admin", adminRouter);
router.use("/property", propertyRouter);
router.use("/appointment", appointmentRouter);

router.use("/send-mail", emailRouter);

module.exports = router;
