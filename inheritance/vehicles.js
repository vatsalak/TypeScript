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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Vehicle.prototype.canSpeed = function () {
        console.log("The vehicle ".concat(this.name, " has gear so it can speed upto ").concat(this.speed, " km/hr"));
    };
    return Vehicle;
}());
var ElectricVehicle = /** @class */ (function (_super) {
    __extends(ElectricVehicle, _super);
    function ElectricVehicle(name, speed, batteryCapacity) {
        var _this = _super.call(this, name, speed) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    ElectricVehicle.prototype.canCharge = function () {
        console.log("The vehicle ".concat(this.name, " has battery capacity ").concat(this.batteryCapacity, "KWH  and so can speed upto ").concat(this.speed, "Km/h"));
    };
    return ElectricVehicle;
}(Vehicle));
var ev = new ElectricVehicle("Hundai", 240, 24);
ev.canCharge();
