/**
 * Converts a Node.js Buffer object into a string using the specified encoding.
 *
 * @param {Buffer} buffer - The Buffer object to convert to a string.
 * @param {string} [encoding='utf-8'] - The character encoding to use for the conversion. Defaults to 'utf-8'.
 * @returns {string} The string representation of the Buffer.
 * @throws {Error} Throws an error if the specified encoding is not supported.
 * @example
 * const buffer = Buffer.from('Hello, World!', 'utf-8');
 * const string = formatBufferToString(buffer, 'utf-8');
 * console.log(string); // Output: 'Hello, World!'
 */
function formatBufferToString(buffer, encoding = "utf-8") {
	return buffer.toString(encoding);
}

module.exports = formatBufferToString;
