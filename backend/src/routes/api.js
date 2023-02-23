const express = require("express");

const usersRouter = require("./users/users.router");
const categoriesRouter = require("./categories/categories.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/categories", categoriesRouter);

module.exports = api;
