var assert = require("assert"),
    capitalize = require("../src/index");


describe("capitalize(string : String)", function() {
    it("should capitalize string", function() {
        assert.equal(capitalize("string"), "String");
    });
});
