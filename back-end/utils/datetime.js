const moment = require('moment'); 
function getCurrentTimestamp() {
 
  return moment().toISOString();
}

function formatDate(date) {
  return moment(date).format('MMMM D, YYYY h:mm A');
}

module.exports = {
  getCurrentTimestamp,
  formatDate,
};
