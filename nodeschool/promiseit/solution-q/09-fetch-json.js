var HTTP = require("q-io/http");

HTTP.read('http://localhost:1337')
    .then(JSON.parse)
    .then(function(response) {
        console.log(response);
    })
    .done();
