//Tuple is a typed array with predefined length and type
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:
let tuple: [number,string,boolean];
tuple=[12,"Lom",true];
console.log(tuple);

//As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:
//[false, 'Coding God was mistaken', 5]; This throws an error 
//Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

// Example
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

//You see the new valueTuples only have strongly defined types for the initial values:


// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple);

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

// Example
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
console.log(graph);
