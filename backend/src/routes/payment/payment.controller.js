const db = require("../../services/firebase.service");
const axios = require("axios");
const crypto = require("crypto");

function createOrderInfo(items) {
	const order = {};

	const newItems = items.map((item) => {
		item.status = "pending";
		return item;
	});

	const order_id = `order_${crypto.randomBytes(16).toString("hex")}`;
	order[order_id] = {
		created_at: new Date(),
		status: "pending",
		subtotal: newItems.reduce(
			(total, item) => item.price * item.quantity + total,
			0
		),
		items: newItems,
	};

	return order;
}

async function handlePayment(req, res) {
	try {
		const userInfo = await axios
			.get(`https://${process.env.auth0_domain}/userinfo`, {
				headers: {
					Authorization: req.headers.authorization,
				},
			})
			.then((response) => {
				return response.data;
			});

		// check if user is existed in user collection, if no, create one
		const usersRef = db.collection("users").doc(userInfo.email);
		usersRef.get().then((docSnapshot) => {
			if (!docSnapshot.exists) {
				usersRef.set({
					email: userInfo.email,
					given_name: userInfo.given_name,
					family_name: userInfo.family_name,
					nickname: userInfo.nickname,
					picture: userInfo.picture,
					email_verified: userInfo.email_verified,
				});
			}
		});

		// patch order info into orders collection
		const orderInfo = createOrderInfo(req.body.cart_items);
		db.collection("orders")
			.doc(userInfo.email)
			.set(
				{
					...orderInfo,
				},
				{ merge: true }
			);

		return res.status(200).json({ message: "success" });
	} catch (error) {
		return res.status(400).json("something went wrong");
	}
}

module.exports = {
	handlePayment,
};
