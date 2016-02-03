var myModule = require('./05-make-it-modular-module.js');

myModule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    return console.error('Error!');
  } else {
    data.forEach(function(element) {
      console.log(element);
    });
  }
});
