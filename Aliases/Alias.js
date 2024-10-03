//Aliasing means creating a new name for a type,which can be any valid type such as primitives,objects or arrays,functions or even unions and intersections
//syntax
//type AliasName=existingType
var personName = "Alice";
var personAge = 23;
console.log(personName);
console.log(personAge);
var employee = {
    name: "John",
    age: 24
};
var manager = {
    name: "Jaya",
    age: 39
};
console.log(employee.name);
console.log(manager);
var add = function (x, y) { return x + y; };
console.log(add(34, 89));
var multiply = function (x, y) { return x * y; };
console.log(multiply(34, 23));
