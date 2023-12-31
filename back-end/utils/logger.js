const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, '..', 'logs');
const errorLogFile = path.join(logsDirectory, 'error.log');
const infoLogFile = path.join(logsDirectory, 'info.log');

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

function logError(error) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ERROR: ${error}\n`;

  fs.appendFile(errorLogFile, logMessage, (err) => {
    if (err) {
      console.error('Error writing to error log:', err);
    }
  });
}

function logInfo(info) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - INFO: ${info}\n`;

  fs.appendFile(infoLogFile, logMessage, (err) => {
    if (err) {
      console.error('Error writing to info log:', err);
    }
  });
}

module.exports = {
  logError,
  logInfo,
};
