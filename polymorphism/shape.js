//Overriding of a shape
// When a class extends another class, it can replace the members of the parent class with the same name.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.toString = function () {
        return "This is Rectangle with width ".concat(this.width, "and length ").concat(this.length);
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        return _super.call(this, length, length) || this;
    }
    Square.prototype.toString = function () {
        return "This is square with width ".concat(this.length);
    };
    return Square;
}(Rectangle));
var sq = new Square(90);
console.log(sq.getArea());
console.log(sq.toString());
