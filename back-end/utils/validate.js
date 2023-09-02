// validate.js

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Minimum password length for complexity
const MIN_PASSWORD_LENGTH = 8;

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
function validateEmail(email) {
  return emailRegex.test(email);
}

/**
 * Validates a password for complexity.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if the password meets complexity requirements, false otherwise.
 */
function validatePassword(password) {
  // Check if the password length meets the minimum requirement
  if (password.length < MIN_PASSWORD_LENGTH) {
    return false;
  }

  // You can add more complexity checks here (e.g., uppercase, lowercase, numbers, symbols)

  return true;
}

module.exports = {
  validateEmail,
  validatePassword,
};
