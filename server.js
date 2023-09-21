const net = require("net");
const { PORT, HOST } = require("./shared/constants");
const formatBufferToString = require("./shared/formatBufferToString");

const server = net.createServer();

const listOfClientSockets = [];

server.on("connection", (socket) => {
	const userId = listOfClientSockets.length + 1;

	listOfClientSockets.push({ id: userId, socket });

	listOfClientSockets.forEach(({ id, socket }) => {
		socket.write(`User: ${id}, joined the chat.\n`);
	});

	socket.on("data", (data) => {
		const formattedData = formatBufferToString(data);
		const id = formattedData.substring(0, formattedData.indexOf("-"));
		const message = formattedData.substring(
			formattedData.indexOf("-message-") + 9
		);

		listOfClientSockets.forEach(({ id, socket }) => {
			socket.write(`> User ${id}: ${message}`);
		});
	});

	socket.on("end", () => {
		listOfClientSockets.map(({ id, socket }) => {
			socket.write(`User: ${id}, left the chat.`);
		});
	});
});

server.listen(PORT, HOST, () => {
	console.log("Server started on:", server.address());
});
