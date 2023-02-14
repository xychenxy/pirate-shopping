const path = require("path");
const express = require("express");
const cors = require("cors");

const api = require("./routes/api");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "react-app", "dist")));

app.use("/v1", api);

app.get("/*", (req, res) => {
	res.sendFile(
		path.join(__dirname, "..", "..", "react-app", "public", "index.html")
	);
});

module.exports = app;
