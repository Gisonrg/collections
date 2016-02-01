var q = require('q');
var defer = q.defer();
// defer.promise is the actual promise itself
// defer.promise.then is the "Q" way of attaching a then handler

function test() {
    setTimeout(defer.resolve, 300, "RESOLVED!");
    return defer.promise;
}

test().then(console.log);

/**

var q = require('q');
var def = q.defer();

def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED!");

*/
