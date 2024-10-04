//In ts the type of the value returned by the functions can be explicitly defined
function getTime() {
    return new Date().getTime();
}
getTime();
//Function with void return type
function printHello() {
    console.log("Hello");
}
printHello();
//function with parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(23, 32));
//If no parameter type is defined ,typescript will default to using any,unless 
//additional type information is available as shown in hte default parameters and
//Optional Parameters
//By defaulttypescript will assume all parameters are required but they can explicitly be marked as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(12, 32, 11));
console.log(add(23, 12));
//Default parameters
//Parameters with default values,the default value goes after the type annotations
function Exponential(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(Exponential(2, 4));
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
//Example
function addition(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(addition(12, 13, 14));
//Arrow functions
var subtraction = function (a, b) {
    return a - b;
};
console.log(subtraction(67, 34));
//Arrow function with single parameter (ommitting paranthesis)
var greet = function (name) { return "Hello,".concat(name); };
console.log(greet("Alice"));
