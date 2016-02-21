'use strict';

var promise = new Promise(function(fulfill, reject) {
    // Your solution here
    setTimeout(function() {
        fulfill('FULFILLED!');
    }, 300);
});

// Your solution here
promise.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
});
