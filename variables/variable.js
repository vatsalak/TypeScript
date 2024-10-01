var agee = 23;
console.log(agee);
var str = "this is a string";
console.log(str);
var idd;
idd = 123; // OK
idd = "abc";
console.log(idd);
var randomValuee = 10;
randomValuee = "Hello"; // OK
randomValuee = true; // OK
console.log(randomValuee);
// Summary of Variable Declarations:
// let: Block-scoped, can be reassigned.
// const: Block-scoped, cannot be reassigned.
// var: Function-scoped or globally scoped, can be reassigned and redeclared.
// Type annotations: Allows defining specific types for variables (e.g., number, string, boolean, etc.).
// Union types: Variables can hold more than one type.
// any: Disables type checking.
// With these features, TypeScript ensures both flexibility and safety in handling variables, catching potential type errors during development.
