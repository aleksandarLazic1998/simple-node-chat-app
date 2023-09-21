const net = require("net");
const { PORT, HOST } = require("./shared/constants");
const formatBufferToString = require("./shared/formatBufferToString");

const server = net.createServer();

const listOfClientSockets = [];

server.on("connection", (socket) => {
	listOfClientSockets.push(socket);

	socket.on("data", (data) => {
		const formattedData = formatBufferToString(data);

		listOfClientSockets.forEach((clientSocket) => {
			clientSocket.write(formattedData);
		});
	});
});

server.listen(PORT, HOST, () => {
	console.log("Server started on:", server.address());
});
