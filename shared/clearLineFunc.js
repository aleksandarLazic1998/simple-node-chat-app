/**
 * Clears the current line in a ReadLine interface in the specified direction.
 *
 * @param {number} direction - The direction in which to clear the line. Use either:
 *   - `ReadLine.MOVE_TO_END`: Clear the line from the current cursor position to the end of the line.
 *   - `ReadLine.MOVE_TO_START`: Clear the line from the current cursor position to the beginning of the line.
 *
 * @returns {Promise<void>} A Promise that resolves when the line is successfully cleared.
 *
 * @throws {Error} If the provided direction is not one of the supported values.
 *
 * @example
 * const ReadLine = require('readline');
 * const readLineInterface = ReadLine.createInterface({
 *   input: process.stdin,
 *   output: process.stdout,
 * });
 *
 * // Clear the line from the cursor position to the end of the line
 * clearLineFunc(ReadLine.MOVE_TO_END)
 *   .then(() => {
 *     console.log('Line cleared from cursor to end.');
 *   })
 *   .catch((error) => {
 *     console.error('Error:', error.message);
 *   });
 */

async function clearLineFunc(direction) {
	return new Promise((resolve, reject) => {
		process.stdout.clearLine(direction, () => {
			resolve();
		});
	});
}

module.exports = clearLineFunc;
