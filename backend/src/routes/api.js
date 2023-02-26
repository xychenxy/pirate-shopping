const express = require("express");

const { jwtCheck } = require("../middleware/authentication");

const usersRouter = require("./users/users.router");
const categoriesRouter = require("./categories/categories.router");
const directoryRouter = require("./directory/directory.router");
const paymentRouter = require("./payment/payment.router");
const profileRouter = require("./profile/profile.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/categories", categoriesRouter);
api.use("/directory", directoryRouter);
api.use("/payment", jwtCheck, paymentRouter);
api.use("/profile", jwtCheck, profileRouter);

module.exports = api;
