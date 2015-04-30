module.exports = isObject;


function isObject(obj) {
    var type = typeof(obj);
    return type === "function" || (obj && type === "object") || false;
}
