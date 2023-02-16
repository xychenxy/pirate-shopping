const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
	try {
		console.log("test");
		return res.status(200).json({ users: ["Jay", "Joy", "Alice"] });
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}

	return res.status(200).json();
});
module.exports = usersRouter;
