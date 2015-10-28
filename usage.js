var deferredRead = require('./naive-deferred');

deferredRead("words.txt").then((words) => {
    // do something with the data
}).fail((e) => {
    // error handling
});
