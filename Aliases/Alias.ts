//Aliasing means creating a new name for a type,which can be any valid type such as primitives,objects or arrays,functions or even unions and intersections
//syntax
//type AliasName=existingType


//examples for primitive types
type name=string;
type age=number;
let personName:name="Alice";
let personAge:age=23;
console.log(personName);
console.log(personAge);


//2.Object type aliasing we can create an alias for object type which helps in avoiding repetition when the same object structure is used multiple times
type Person={
    name:string,
    age:number
};
let employee:Person={
    name:"John",
    age:24
};
let manager:Person={
    name:"Jaya",
    age:39
};
console.log(employee.name);
console.log(manager);

//Function type aliases
type AddFunction=(a:number,b:number)=>number;

const add:AddFunction=(x,y)=>x+y;
console.log(add(34,89));
 
type MultiplyFunc=(a:number,b:number)=>number;
const multiply:MultiplyFunc=(x,y)=>x*y;
console.log(multiply(34,23));



