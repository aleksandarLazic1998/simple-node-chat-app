const net = require("net");
const { PORT, HOST } = require("./shared/constants");

const server = net.createServer();

server.on("connection", (socket) => {
	console.log("Connection Created.\n");

	socket.on("data", (data) => {
		console.log(data.toString("utf-8"));
	});
});

server.listen(PORT, HOST, () => {
	console.log("Server started on:", server.address());
});
