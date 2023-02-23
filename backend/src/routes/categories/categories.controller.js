const db = require("../../services/firebase.service");

async function getAllCategories(req, res) {
	const categories = await db
		.collection("categories")
		.get()
		.then((querySnapshot) => {
			const categories = [];
			querySnapshot.forEach((doc) => {
				categories.push(doc.data());
			});
			return categories;
		});

	return res.status(200).json(categories);
}

module.exports = {
	getAllCategories,
};
