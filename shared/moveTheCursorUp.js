/**
 * Moves the cursor position on the standard output (stdout) in the specified direction.
 *
 * @param {number} directionX - The number of columns to move the cursor horizontally.
 * @param {number} directionY - The number of rows to move the cursor vertically.
 *
 * @returns {Promise<void>} A Promise that resolves when the cursor is successfully moved.
 *
 * @throws {Error} If the provided directions (directionX and directionY) are not valid numbers.
 *
 * @example
 * // Move the cursor 2 columns to the right and 1 row down
 * moveTheCursorUp(2, 1)
 *   .then(() => {
 *     console.log('Cursor moved successfully.');
 *   })
 *   .catch((error) => {
 *     console.error('Error:', error.message);
 *   });
 */

function moveTheCursorUp(directionX, directionY) {
	return new Promise((resolve, reject) => {
		process.stdout.moveCursor(directionX, directionY, () => {
			resolve();
		});
	});
}

module.exports = moveTheCursorUp;
