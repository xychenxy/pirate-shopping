const path = require("path");

require("dotenv").config({
	path: path.resolve(__dirname, "..", "./env/.env." + process.env.NODE_ENV),
});

const http = require("http");

const app = require("./app");

const PORT = 5000;

const server = http.createServer(app);

async function startServer() {
	server.listen(PORT, () => {
		console.log(`${process.env.NODE_ENV}, Listening on port ${PORT}...`);
	});
}

startServer();
