//Polymorphism as in other programing languages allows objects  of different classe 
//to be treated as object of a common super class
//Polymorphism typically refers  to mtheod overriding,where a subclass provides its own 
//implementation of a method i.e already defined in the parent class.
//There are two types in polymorphism method overloaading and method overriding
//Over loading is refered to as compile time polymorphism
//where methods of same name but different parameter signatures 
//Over riding is refered to as run time polymorphism
//achived when sub class overrides the method of the super class to provide a specific implementation
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
//Method overloading-compile time polymorphism
//Type script does not support true polymorphism as seen in c++ or java
//But we can create a method with a same name with different parameter signature
var Additon = /** @class */ (function () {
    function Additon() {
    }
    Additon.prototype.add = function (a, b) {
        return a + b;
    };
    ;
    return Additon;
}());
var calc = new Additon();
console.log(calc.add(23, 24));
console.log(calc.add("hi", "helo"));
// Here, we have two method signatures for the add method:
// One that takes two numbers and returns their sum.
// One that takes two strings and concatenates them.
// The actual implementation is a single method that can handle both types of input.
//Runtime polymorphism-Method over-riding
//Mthod overriding alllows a specific implementation of a method in subclass ie already
//defined in the parent class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sound = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(Animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        return _super.call(this, name) || this;
    }
    cat.prototype.sound = function () {
        console.log("".concat(this.name, " mewo's"));
    };
    return cat;
}(Animal));
var animal = new Dog("whisky");
var animalcat = new cat("Reena");
animal.sound();
animalcat.sound();
