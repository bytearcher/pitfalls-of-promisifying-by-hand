function deferredRead(fs, file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "UTF-8", function(error, text) {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(text);
            }
        });
    });
}

module.exports = deferredRead;
