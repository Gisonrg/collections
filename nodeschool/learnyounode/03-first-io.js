var fs = require('fs');
var fileName = process.argv[2];
var bufferString = fs.readFileSync(fileName);
console.log(Number(bufferString.toString().split('\n').length) - 1);
