const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const { validateAuth } = require("../middleware/auth");
const validateToken = require("../config/tokens");

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/me", validateAuth, userController.getAuthenticatedUser);

userRouter.post("/logout", userController.logout);

module.exports = userRouter;
