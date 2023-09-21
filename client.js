const net = require("net");
const { PORT, HOST } = require("./shared/constants");
const formatBufferToString = require("./shared/formatBufferToString");
const askForMessage = require("./shared/askForMessage");
const clearLineFunc = require("./shared/clearLineFunc");
const moveTheCursorUp = require("./shared/moveTheCursorUp");

const clientSocket = net.createConnection({ port: PORT, host: HOST });

let userId = "Unknown";

clientSocket.on("data", async (data) => {
	const formattedData = formatBufferToString(data);

	console.log();
	// move the cursor one line up
	await moveTheCursorUp(0, -1);
	// clear that line that cursor just moved into
	await clearLineFunc(0);

	if (data.toString("utf-8").substring(0, 2) === "id") {
		id = data.toString("utf-8").substring(3);

		console.log(`Your id is ${id}!\n`);
	} else {
		console.log(data.toString("utf-8"));
	}
});

clientSocket.on("end", () => {
	clientSocket.write(`User ${userId} left the chat.`);
});
