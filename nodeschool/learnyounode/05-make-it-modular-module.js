var fs = require('fs');
var path = require('path');

module.exports = function(filePath, fileExt, callback) {
  fs.readdir(filePath, function(err, data) {
    if (err) {
      return callback(err);
    }
    var filteredFiles = data.filter(function(file) {
      if (path.extname(file) === ('.' + fileExt)) {
        return true;
      }
    });

    callback(null, filteredFiles);
  });
};
