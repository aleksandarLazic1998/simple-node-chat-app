const clearLineFunc = require("./clearLineFunc");
const { readLineInterface } = require("./constants");
const moveTheCursorUp = require("./moveTheCursorUp");

/**
 * Asynchronously prompts the user to enter a message and writes it to a provided client socket.
 *
 * @param {net.Socket} clientSocket - The client socket to which the message will be written.
 * @returns {Promise<void>} A Promise that resolves when the message is successfully written to the clientSocket.
 *
 * @throws {Error} If there is an error while reading user input or writing to the clientSocket.
 *
 * @example
 * const net = require('net');
 * const client = new net.Socket();
 * client.connect(3000, 'localhost', () => {
 *   askForMessage(client)
 *     .then(() => {
 *       console.log('Message sent successfully.');
 *     })
 *     .catch((error) => {
 *       console.error('Error:', error.message);
 *     });
 * });
 */

async function askForMessage(clientSocket) {
	const readLineMessage = await readLineInterface.question(
		"Enter the message > "
	);

	clientSocket.write(readLineMessage);
	await moveTheCursorUp(0, -1);
	await clearLineFunc(0);
}

module.exports = askForMessage;
