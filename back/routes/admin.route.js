const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin.controller");



adminRouter.post("/submit",  adminController.submitAdmin);

adminRouter.post("/:id/edit",);

adminRouter.delete("/delete/:id",adminController.deleteAdmin);

adminRouter.get("/allUser",adminController.getAllUser)

module.exports = adminRouter;