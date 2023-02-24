const db = require("../../services/firebase.service");

async function getAllDirectory(req, res) {
	const directory = await db
		.collection("categories")
		.get()
		.then((querySnapshot) => {
			const directory = [];
			querySnapshot.forEach((doc) => {
				directory.push({
					imageUrl: doc.data().imageUrl,
					title: doc.id,
				});
			});
			return directory;
		});

	return res.status(200).json(directory);
}

module.exports = {
	getAllDirectory,
};
