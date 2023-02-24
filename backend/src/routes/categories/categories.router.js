const express = require("express");
const { getAllCategories } = require("./categories.controller");

const categoriesRouter = express.Router();

categoriesRouter.get("/", getAllCategories);

categoriesRouter.get("/:id", async (req, res) => {});

module.exports = categoriesRouter;
