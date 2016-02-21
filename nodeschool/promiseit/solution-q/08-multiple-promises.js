var q = require('q');

var def1 = q.defer();
var def2 = q.defer();

function all(promise1, promise2) {
    var counter = 0;
    var internalPromise = q.defer();
    var val1, val2;
    promise1.then(function(value) {
        val1 = value;
        counter++;
        if (counter == 2) {
            internalPromise.resolve([val1, val2]);
        }
    }).then(null, function() {
        internalPromise.reject();
    }).done();

    promise2.then(function(value) {
        val2 = value;
        counter++;
        if (counter >= 2) {
            internalPromise.resolve([val1, val2]);
        }
    }).then(null, function() {
        internalPromise.reject();
    }).done();

    return internalPromise.promise;
}

all(def1.promise, def2.promise).then(console.log).done();

setTimeout(function() {
    def1.resolve('PROMISES');
    def2.resolve('FTW');
}, 200);
