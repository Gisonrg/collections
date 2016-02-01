var q = require('q');
var def = q.defer();

def.promise.then(console.log, function(err) {
    console.log(err.message);
});
setTimeout(def.reject(new Error("REJECTED!")), 300);
