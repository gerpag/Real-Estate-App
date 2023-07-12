const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

// userRouter.post("/register", (req, res) => {
//   console.log("BODY", req.body);
//   User.create(req.body).then((newUsers) => {
//     res.status(201).send(newUsers);
//   });
// });

userRouter.post("/register", userController.registerUser);

module.exports = userRouter;
