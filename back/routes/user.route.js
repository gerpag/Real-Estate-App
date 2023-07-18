const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const {
  validateAuth,
  validateUserProfileAccess,
} = require("../middlewares/auth");

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/me", validateAuth, userController.getAuthenticatedUser);

userRouter.get("/logout", userController.logout);

userRouter.get(
  "/:id/profile",
  validateAuth,
  validateUserProfileAccess,
  userController.getUserProfile
);
// userRouter.put(
//   "/:id/profile",
//   validateAuth,
//   validateUserProfileAccess,
//   userController.updateUserProfile
// );
// userRouter.delete(
//   "/:id/profile",
//   validateAuth,
//   validateUserProfileAccess,
//   userController.deleteUserProfile
// );

module.exports = userRouter;
