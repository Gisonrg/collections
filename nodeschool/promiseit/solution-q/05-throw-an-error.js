var q = require('q');

var input = process.argv[2];

function parsePromised(input) {
    var result;
    var def = q.defer();
    try {
        result = JSON.parse(input);
    } catch (e) {
        def.reject(e);
    }
    def.resolve(result);

    return def.promise;
}

parsePromised(input)
    .then(null, console.log);
