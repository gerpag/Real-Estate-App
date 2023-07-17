const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin.controller");



adminRouter.post("/submit",  adminController.submitAdmin);

adminRouter.post("/:id/edit",);

adminRouter.get("/delete/:id",);

module.exports = adminRouter;