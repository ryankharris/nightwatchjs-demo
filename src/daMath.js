"use strict";

// This code provides something to write unit tests for.

// production exports
exports.add = add;
exports.prod = prod;

// test exports

function add(...args) {
  return args.reduce((acc, val) => acc + val);
}

function prod(...args) {
  return args.reduce((acc, val) => acc * val);
}
