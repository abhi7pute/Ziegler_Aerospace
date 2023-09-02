const bcrypt = require('bcrypt');

/**
 * Hashes a user's password before storing it in the database.
 * @param {string} password - The user's plain text password.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
async function hashPassword(password) {
  // Generate a salt (a random string)
  const saltRounds = 10; // You can adjust the number of rounds for hashing
  const salt = await bcrypt.genSalt(saltRounds);

  // Hash the password with the generated salt
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

/**
 * Compares a user's input password with the stored hashed password.
 * @param {string} inputPassword - The user's input plain text password.
 * @param {string} hashedPassword - The hashed password stored in the database.
 * @returns {Promise<boolean>} - A promise that resolves to true if the passwords match, false otherwise.
 */
async function comparePassword(inputPassword, hashedPassword) {
  // Compare the input password with the stored hashed password
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

  return isMatch;
}

module.exports = {
  hashPassword,
  comparePassword,
};
