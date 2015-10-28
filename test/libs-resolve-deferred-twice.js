var assert = require('assert');

describe('kew', () => {

    var Q = require('kew');

    describe('deferred', () => {
        it('fails when resolved twice', function() {
            assert.throws(() => {
                var deferred = Q.defer();
                deferred.resolve("a");
                deferred.resolve("b");
            });
        });
    });
});

describe('q', () => {

    var Q = require('q');

    describe('deferred', () => {
        it('fails when resolved twice', function() {
            assert.throws(() => {
                var deferred = Q.defer();
                deferred.resolve("a");
                deferred.resolve("b");
            });
        });
    });
});

describe('bluebird', () => {

    var Promise = require('bluebird');

    describe('deferred', () => {
        it('fails when resolved twice', function() {
            assert.throws(() => {
                var deferred = Promise.pending();
                deferred.fulfill("a");
                deferred.fulfill("b");
            });
        });
    });
});

describe('native Promise', () => {

    describe('deferred', () => {
        it('fails when resolved twice', function() {
            assert.throws(() => {
                new Promise((fulfill) => {
                    fulfill("a");
                    fulfill("b");
                });
            });
        });
    });
});
