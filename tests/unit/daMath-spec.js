"use strict";

const assert = require("assert");
const daCode = require("../../src/daMath");

module.exports = {
  "unit test daMath": {
    testAdd: function() {
      let sum = daCode.add(1, 2);
      assert.equal(sum, 3);

      sum = daCode.add(-1, 1);
      assert.equal(sum, 0);
    },
    testProd: function() {
      let prod = daCode.prod(1, 2);
      assert.equal(prod, 2);

      prod = daCode.prod(1, -1);
      assert.equal(prod, -1);

      prod = daCode.prod(1, 0);
      assert.equal(prod, 0);
    }
  }
};
