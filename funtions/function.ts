//In ts the type of the value returned by the functions can be explicitly defined
function getTime(): number{
    return new Date().getTime();
}
getTime();
//Function with void return type
function printHello():void{
    console.log("Hello");
    
}
printHello();

//function with parameters
function multiply(a: number,b: number){
    return a*b;
}
console.log(multiply(23,32));
//If no parameter type is defined ,typescript will default to using any,unless 
//additional type information is available as shown in hte default parameters and

//Optional Parameters
//By defaulttypescript will assume all parameters are required but they can explicitly be marked as optional
function add(a: number,b: number,c?: number)
{
    return a+b+(c || 0);
}
console.log(add(12,32,11));
console.log(add(23,12));

//Default parameters
//Parameters with default values,the default value goes after the type annotations
function Exponential(value:number,exponent:number=10){
    return value**exponent
}
console.log(Exponential(2,4));


//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

//Example
function addition(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addition(12,13,14));


//Arrow functions
let subtraction=(a:number,b:number): number=>{
    return a-b;
};
console.log(subtraction(67,34));

//Arrow function with single parameter (ommitting paranthesis)
let greet=(name:string):string=>`Hello,${name}`;
console.log(greet("Alice"));


