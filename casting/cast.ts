//Ther are times when working with types its necessary to override the type of a variable such 
//as when incorrect types are provided by the library
//Casting is the process of overriding a type
let x:unknown="Stirng Hello";
let len=(x as string).length;
console.log(len);


//casting dosent actually change the type of the data within the variable for eg 
//the below code will not work as expected since x still holds a number
let a:unknown=4;
// leng=(x as string).length;
// console.log(leng);
let b:unknown="Hi hello bride labz";
let ln=(<string>b).length;
console.log(ln);

//Force casting
//To override type errors that type script may throw when casting ,first cast to unknown and 
//then to the target type.
let c="Hello";
console.log(((c as unknown)as string).length);
 //console.log(((c as unknown)as string).length);  c is not actually a number 
 //so it will throw an error.
