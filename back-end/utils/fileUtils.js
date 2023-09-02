const fs = require('fs');
const path = require('path');

// Define the directory where you want to store uploaded files
const uploadDirectory = path.join(__dirname, 'uploads');

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

/**
 * Handles file uploads.
 * @param {File} file - The uploaded file (from a form or API).
 * @returns {Promise<string>} - Returns the path to the uploaded file on success.
 */
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = path.join(uploadDirectory, fileName);

    file.mv(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(filePath);
    });
  });
};

/**
 * Deletes a file from the server.
 * @param {string} filePath - The path to the file you want to delete.
 * @returns {Promise<void>} - Resolves on successful deletion, rejects on error.
 */
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

module.exports = { uploadFile, deleteFile };
