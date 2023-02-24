const express = require("express");
const { getAllDirectory } = require("./directory.controller");

const directoryRouter = express.Router();

directoryRouter.get("/", getAllDirectory);

module.exports = directoryRouter;
