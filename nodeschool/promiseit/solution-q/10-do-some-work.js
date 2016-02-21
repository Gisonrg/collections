var HTTP = require("q-io/http");

// Grab user id
HTTP.read('http://localhost:7000')
    .then(function(response) {
        return response.toString();
    })
    .then(function(id) {
        return HTTP.read('http://localhost:7001/' + id);
    })
    .then(JSON.parse)
    .then(console.log)
    .done();
