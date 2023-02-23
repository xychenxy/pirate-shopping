const path = require("path");
const express = require("express");
const cors = require("cors");

const api = require("./routes/api");
const Config = require("./config");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "..", "react-app", "dist")));

app.use("/v1", api);

if (["prod", "production"].includes(Config.envName)) {
	//Set static folder
	app.use(express.static(path.join(__dirname, "..", "dist")));
	app.get("/*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
	});
}

module.exports = app;
