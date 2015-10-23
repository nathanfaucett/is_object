var tape = require("tape"),
    isObject = require("..");


tape("isObject(value: Any) should return true when the value is an Object", function(assert) {
    assert.equal(isObject(null), false);
    assert.equal(isObject(undefined), false);
    assert.equal(isObject(0), false);
    assert.equal(isObject(""), false);
    assert.equal(isObject(/./), true);
    assert.equal(isObject(function noop() {}), true);
    assert.equal(isObject({}), true);
    assert.equal(isObject([]), true);
    assert.end();
});
