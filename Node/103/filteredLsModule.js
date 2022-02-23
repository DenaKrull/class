const fs = require('fs');
const path = require('path');

module.exports = async function (dir, ext, callback) {
  // try {
  //   const files = await fs.readdir(dir);
  //   const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
  //   callback(null, filteredFiles);
  // } catch (err) {
  //   callback(err);
  // }
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
    callback(null, filteredFiles);
  });
}




