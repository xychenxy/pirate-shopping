const express = require("express");
const { getUserProfile } = require("./profile.controller");

const profileRouter = express.Router();

profileRouter.get("/:id", getUserProfile);

module.exports = profileRouter;
