//TypeScript has a specific syntax for typing objects.
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car.type);
  console.log(car);
  
  

//TypeScript can infer the types of properties based on their values.
//Type Inference
let car1 = {
  type: "Toyota",
};
car1.type = "Ford"; // no error
//car1.type = 2; // Error: Type 'num

//Optional Properties
//You can define optional properties in an object by adding a
// question mark (?) after the property name.
let employee: { name: string, age?: number } = {
  name: "Alice"
};

console.log(employee.name); // Output: Alice
console.log(employee.age);  // Output: undefined (since it's optional)
//In this case, the age property is optional. It may or may not be present in the object.


//Readonly Properties
//You can mark properties as readonly to prevent them from being modified after the object is created.
let car2: { readonly brand: string, model: string } = {
  brand: "Tesla",
  model: "Model S"
};

// car.brand = "BMW"; // Error: Cannot assign to 'brand' because it is a read-only property
car2.model = "Model X"; // OK, 'model' is not readonly


//Index Signatures
//You can define objects with dynamic or unknown property names using index signatures.
let scores: { [key: string]: number } = {
  "Alice": 95,
  "Bob": 90
};

scores["Charlie"] = 85; // OK

console.log(scores["Alice"]); // Output: 95
