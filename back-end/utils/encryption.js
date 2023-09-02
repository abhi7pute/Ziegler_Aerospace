const bcrypt = require('bcrypt');
async function hashPassword(password) {
  
  const saltRounds = 10; 
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

async function comparePassword(inputPassword, hashedPassword) {
  
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

  return isMatch;
}

module.exports = {
  hashPassword,
  comparePassword,
};
