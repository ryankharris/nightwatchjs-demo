"use strict";

// This code provides something to write int tests for.

// production exports
exports.parseNums = parseNums;

// test exports

function parseNums(s) {
  if (typeof s !== "string") {
    throw "Error: parseNums requires string argument";
  }
  let q = [];
  let re = /\d+/g;
  let pushIt = v => q.push(v);
  s.replace(re, pushIt);
  let nums = q.map(v => parseInt(v, 10));
  return nums;
}
