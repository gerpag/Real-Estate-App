const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const favoritesRouter = require("./favorites.route");
const adminRouter = require("./admin.route")


router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/admin",adminRouter)

module.exports = router;
