const net = require("net");
const { PORT, HOST } = require("./shared/constants");

const clientSocket = net.createConnection({ port: PORT, host: HOST });

clientSocket.write("Hi Server");

clientSocket.on("end", () => {
	console.log("Connection ended.");
});
