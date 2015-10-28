var deferredRead = require('../naive-deferredRead');

var assert = require('assert');
var fs = require('fs');

describe('deferredRead', () => {
    it('reads words file correctly', () => {
        return deferredRead(fs, "words.txt").then((words) => {
            assert.equal(words, "word\n");
        });
    });
});
