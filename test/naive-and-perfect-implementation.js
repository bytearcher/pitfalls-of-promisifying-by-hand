var assert = require('assert');
var Q = require('q');

var naiveDeferredRead = require('../naive-deferredRead');
var perfectDeferredRead = require('../perfect-deferredRead');
var perfectNativeDeferredRead = require('../perfect-native-deferredRead');

function mockedFsModule(throwError, resolveTwice) {
    return {
        readFile(arg1, arg2, cb) {
            if (throwError) {
                throw new Error();
            }
            if (resolveTwice) {
                // hard (impossible?) to test asynchronous error throwing, so lets just do this synchronously, should have desired effect anyhow
                // setImmediate(() => {
                cb(null, "a");
                // setImmediate(() => {
                cb(null, "b");
                // });
                // });
            }
        }
    }
}

function commonTests(deferredRead) {

    it('calls fail()-handler if initiating function throws error', (done) => {
        var fs = mockedFsModule(true, false);

        deferredRead(fs).then((lines) => {
            // do some stuffs
        }).catch((e) => {
            // handle error
            done();
        });
    });

    it('throws error if resolved twice', () => {
        var fs = mockedFsModule(false, true);

        assert.throws(() => {
            deferredRead(fs).then((lines) => {
                // do some stuffs
            }).catch((e) => {
                // handle error
            });
        });
    });
}

describe('promisifying by hand', () => {

    describe('naive implementation', () => {
        commonTests(naiveDeferredRead);
    });

    describe('perfect A+ implementation', () => {
        commonTests(perfectDeferredRead);
    });

    describe('perfect native implementation', () => {
        commonTests(perfectNativeDeferredRead);
    });
});
