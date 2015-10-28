var Q = require('q');

function deferredRead(fs, file) {
    var deferred = Q.defer();
    var resolved = false;
    try {
        fs.readFile(file, "UTF-8", function(error, text) {
            if (resolved) {
                throw new Error("Already resolved.");
            }
            resolved = true;
            if (error) {
                deferred.reject(new Error(error));
            } else {
                deferred.resolve(text);
            }
        });
    } catch (e) {
        // needed to handle special case when callback is called
        // synchronously, normally it is asynchronous
        if (e.message === "Already resolved.") {
            throw e;
        }
        deferred.reject(e);
    }
    return deferred.promise;
}

module.exports = deferredRead;
