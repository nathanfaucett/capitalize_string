var tape = require("tape"),
    capitalizeString = require("../src/index");


tape("capitalizeString(string : String)", function(assert) {
    assert.equal(capitalizeString("string"), "String", "should capitalize string");
    assert.end();
});
