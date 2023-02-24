const express = require("express");
const { getAllCategories } = require("./categories.controller");
const { jwtCheck } = require("../../middleware/authentication");

const categoriesRouter = express.Router();

categoriesRouter.post("/", getAllCategories);

categoriesRouter.get("/:id", async (req, res) => {});

module.exports = categoriesRouter;
