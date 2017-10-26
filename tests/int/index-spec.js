"use strict";

const assert = require("assert");
const daMath = require("../../src/daMath");
const daParse = require("../../src/daParse");

module.exports = {
  "integration test daMath with daParse": {
    testAddParseNums: function() {
      let result = daMath.add(daParse.parseNums("4 5"));
      assert(result, 9);
    },
    testProdParseNums: function() {
      let result = daMath.prod(daParse.parseNums("2,3"));
      assert(result, 6);
    }
  }
};
