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
var Parent = /** @class */ (function () {
    function Parent(features) {
        this.features = features;
    }
    Parent.prototype.showFeature = function () {
        console.log("Parent has features ".concat(this.features));
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child(features, extraFeatures) {
        var _this = _super.call(this, features) || this;
        _this.extraFeatures = extraFeatures;
        return _this;
    }
    child.prototype.showFeature = function () {
        console.log("Child's features are:".concat(this.features, " and ").concat(this.extraFeatures));
    };
    return child;
}(Parent));
var p = new Parent("sing");
var c = new child("can sing", "can dance");
p.showFeature();
c.showFeature();
