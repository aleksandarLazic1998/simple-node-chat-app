const net = require("net");
const { PORT, HOST } = require("./shared/constants");
const formatBufferToString = require("./shared/formatBufferToString");
const askForMessage = require("./shared/askForMessage");

const clientSocket = net.createConnection({ port: PORT, host: HOST });

let userId = "Unknown";

clientSocket.on("connection", (data) => {
	askForMessage(clientSocket);
});

clientSocket.on("data", (data) => {
	const formattedData = formatBufferToString(data);

	if (formattedData.includes("left the chat.")) {
		userId = formattedData.substring(6, formattedData.indexOf(","));
	} else {
		console.log(formattedData);

		askForMessage(clientSocket);
	}

	if (formattedData.includes("joined the chat.")) {
		console.log(`${formattedData}`);
	} else {
		console.log(formattedData);

		askForMessage(clientSocket);
	}
});

clientSocket.on("end", () => {
	clientSocket.write(`User ${userId} left the chat.`);
});
