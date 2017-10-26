"use strict";

const assert = require("assert");
const daCode = require("../../src/daParse");

module.exports = {
  "unit test daParse": {
    testParseNums: function() {
      let s = "h3r3 4r3 s0m3 numb3r5";
      let nums = daCode.parseNums(s);
      assert(nums, [3, 3, 4, 3, 0, 3, 3, 5]);
    }
  }
};
