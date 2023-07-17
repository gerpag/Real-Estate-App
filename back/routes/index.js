const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const favoritesRouter = require("./favorites.route");

router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);

module.exports = router;
