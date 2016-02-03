var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(filePath, function(err, data) {
  if (err) {
    console.error('Error');
  }
  var filteredFiles = data.filter(function(file) {
    if (path.extname(file) === ('.' + fileExt)) {
      return true;
    }
  });

  filteredFiles.forEach(function(element) {
    console.log(element);
  });
});
