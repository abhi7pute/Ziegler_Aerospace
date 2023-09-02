const fs = require('fs');
const path = require('path');

const uploadDirectory = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

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
