const http = require("http");

const app = require("./app");

const PORT = 5000;

const server = http.createServer(app);

async function startServer() {
	server.listen(PORT, () => {
		console.log(`Listening on port ${PORT}...`);
	});
}

startServer();
