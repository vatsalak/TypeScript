// TypeScript Arrays
// TypeScript has a specific syntax for typing arrays.

// Read more about arrays in our JavaScript Array chapter.
const names: string[] = [];
names.push("Dylan"); // no error
console.log(names);

// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// Readonly
// The readonly keyword can prevent arrays from being changed.

// Example
const namess: readonly string[] = ["Dylan"];
console.log("Readonly array");

//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?


//Type inference
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
console.log(numbers);

// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
