var bl = require('bl');
var http = require('http');

// first request
var results = [];
var count = 0;

function getRequest(index) {
  http.get(process.argv[2 + index], function(res) {
    res.pipe(bl(function(err, data) {
        results[index] = data.toString();
        count++;

        if (count === 3) {
          printResults();
        }
    }));
  });
}

function printResults() {
  for (var i=0;i<3;i++) {
    console.log(results[i]);
  }
}

for (var i=0;i<3;i++) {
  getRequest(i);
}
