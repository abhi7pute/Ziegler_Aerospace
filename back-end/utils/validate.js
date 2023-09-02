
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const MIN_PASSWORD_LENGTH = 8;

function validateEmail(email) {
  return emailRegex.test(email);
}
function validatePassword(password) {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return false;
  }

  return true;
}

module.exports = {
  validateEmail,
  validatePassword,
};
