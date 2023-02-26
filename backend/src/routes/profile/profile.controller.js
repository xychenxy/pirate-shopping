const db = require("../../services/firebase.service");

async function getUserProfile(req, res) {
	try {
		const email = req.params.id;

		const data = [];

		await db
			.collection("orders")
			.get(email)
			.then((docSnapshot) => {
				docSnapshot.forEach((doc) => {
					data.push(doc.data());
				});
			});

		const ordersInfo = data.length === 1 ? data[0] : {};
		const responseData = [];

		Object.keys(ordersInfo).forEach((id) => {
			ordersInfo[id]["order_id"] = id;
			responseData.push(ordersInfo[id]);
		});

		return res.status(200).json(responseData);
	} catch (error) {
		console.log("error", error);
		return res.status(400).json("something went wrong");
	}
}

module.exports = {
	getUserProfile,
};

/**
 * other ways to do query
 */
// const orderRef = db.collection("orders").doc(email);
// orderRef.get().then((docSnapshot) => {
// 	if (docSnapshot.exists) {
// 		docSnapshot.forEach((doc) => {
// 			console.log(doc.data());
// 		});
// 	}
// });
