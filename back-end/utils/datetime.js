// Import any necessary libraries for date/time handling
const moment = require('moment'); // You may need to install the 'moment' library using npm or yarn.

// Function to get the current timestamp
function getCurrentTimestamp() {
  // Use 'moment' library to get the current timestamp in ISO 8601 format
  return moment().toISOString();
}

// Function to format a date into a readable string
function formatDate(date) {
  // Use 'moment' library to format the provided date
  return moment(date).format('MMMM D, YYYY h:mm A'); // Example format, change as needed
}

// Export the functions to use in other parts of your application
module.exports = {
  getCurrentTimestamp,
  formatDate,
};
