const express = require("express");

const usersRouter = require("./users/users.router");
const categoriesRouter = require("./categories/categories.router");
const directoryRouter = require("./directory/directory.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/categories", categoriesRouter);
api.use("/directory", directoryRouter);

module.exports = api;
