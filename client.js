const net = require("net");
const { PORT, HOST } = require("./shared/constants");
const formatBufferToString = require("./shared/formatBufferToString");
const askForMessage = require("./shared/askForMessage");

const clientSocket = net.createConnection({ port: PORT, host: HOST });

clientSocket.on("connect", () => {
	askForMessage(clientSocket);
});

clientSocket.on("data", (data) => {
	const formattedData = formatBufferToString(data);

	console.log(formattedData, "------Data received on all clients.");

	askForMessage(clientSocket);
});

clientSocket.on("end", () => {
	console.log("Connection ended.");
	clientSocket.write("Socket x left the chat.");
});
