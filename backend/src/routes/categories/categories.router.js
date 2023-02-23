const express = require("express");
const { getAllCategories } = require("./categories.controller");
const { jwtCheck } = require("../../middleware/authentication");

const categoriesRouter = express.Router();

categoriesRouter.post("/", jwtCheck, getAllCategories);

categoriesRouter.get("/:id", async (req, res) => {
	const userId = req.params.id;
});

module.exports = categoriesRouter;
