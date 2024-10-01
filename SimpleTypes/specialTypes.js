// Type: any
// any is a type that disables type checking and effectively allows
// all types to be used.
// The example below does not use any and will throw an error:
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
console.log(v);
// any can be a useful way to get past errors since it disables type checking,
//  but TypeScript will not be able provide type safety, and tools which rely on 
//  type data, such as auto completion, will not work. 
// Remember, it should be avoided at "any" cost...
//Type Unknown
// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types
//  from being used, as shown in the below example:
var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// 3. never Type:
// The never type represents values that never occur. It is used to indicate that a function never returns (e.g., a function that always throws an error or has an infinite loop), or for situations where code should never be reached.
// Use Case:
// Use never when a function or expression is supposed to terminate the program (like throwing an error) or when you're performing exhaustive type checks.
// Example:
// 
function throwError(message) {
    throw new Error(message); // Function never returns
}
// never and TypeScript's Control Flow: The never type helps ensure that all code paths are covered, especially when handling union types or function return types that should not return.
// Summary:
// any: Disables type checking, allows any operation, and can hold any type of value. It should be avoided as much as possible because it removes the safety of TypeScript.
// unknown: Like any, it can hold any value, but operations cannot be performed on it without explicit type checking. It's safer than any.
// never: Represents values that never occur, used in functions that never return or to enforce exhaustive checks in code. It's often used in unreachable code paths or functions that throw errors.
// These special types add flexibility to TypeScript while maintaining the safety and power of the type system.
