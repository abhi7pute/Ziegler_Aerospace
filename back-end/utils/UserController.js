const { validateEmail, validatePassword } = require('./validationUtils');

const email = 'user@example.com';
const password = 'SecurePass123';

if (validateEmail(email)) {
  // Email is valid
} else {
  // Email is invalid
}

if (validatePassword(password)) {
  // Password meets complexity requirements
} else {
  // Password does not meet complexity requirements
}
