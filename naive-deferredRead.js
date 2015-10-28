var Q = require('q');

function deferredRead(fs, file) {
    var deferred = Q.defer();
    fs.readFile(file, "UTF-8", function(error, text) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(text);
        }
    });
    return deferred.promise;
}

module.exports = deferredRead;
