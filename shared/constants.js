const { stdin, stdout } = require("process");
const ReadLinePromises = require("readline/promises");

const PORT = 3030;
const HOST = "127.0.0.1";

const readLineInterface = ReadLinePromises.createInterface({
	input: stdin,
	output: stdout,
});

module.exports = { PORT, HOST, readLineInterface };
