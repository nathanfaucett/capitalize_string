var assert = require("assert"),
    capitalizeString = require("../src/index");


describe("capitalizeString(string : String)", function() {
    it("should capitalize string", function() {
        assert.equal(capitalizeString("string"), "String");
    });
});
