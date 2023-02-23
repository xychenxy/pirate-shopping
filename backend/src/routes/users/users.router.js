const express = require("express");
const db = require("../../services/firebase.service");

const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
	try {
		console.log("test");

		let userRef = db.collection("users");

		const users = userRef.get().then((querySnapshot) => {
			console.log("querySnapshot", querySnapshot);
			return querySnapshot.forEach((document) => {
				console.log(document.data());
				return document.data();
			});
		});

		console.log("users", users);

		return res.status(200).json({ users: ["Jay", "Joy", "Alice"] });
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}

	return res.status(200).json();
});

usersRouter.get("/:id", async (req, res) => {
	const userId = req.params.id;
});

module.exports = usersRouter;
