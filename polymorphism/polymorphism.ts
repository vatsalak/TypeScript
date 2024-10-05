//Polymorphism as in other programing languages allows objects  of different classe 
//to be treated as object of a common super class
//Polymorphism typically refers  to mtheod overriding,where a subclass provides its own 
//implementation of a method i.e already defined in the parent class.
//There are two types in polymorphism method overloaading and method overriding
//Over loading is refered to as compile time polymorphism
//where methods of same name but different parameter signatures 
//Over riding is refered to as run time polymorphism
//achived when sub class overrides the method of the super class to provide a specific implementation

//Method overloading-compile time polymorphism
//Type script does not support true polymorphism as seen in c++ or java
//But we can create a method with a same name with different parameter signature

class Additon{
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:any,b:any):any{
        return a+b;
    };
}
const calc=new Additon();
console.log(calc.add(23,24));
console.log(calc.add("hi","helo"));
// Here, we have two method signatures for the add method:

// One that takes two numbers and returns their sum.
// One that takes two strings and concatenates them.
// The actual implementation is a single method that can handle both types of input.

//Runtime polymorphism-Method over-riding
//Mthod overriding alllows a specific implementation of a method in subclass ie already
//defined in the parent class
class Animal{
    name: string;
    constructor (name :string){
        this.name=name;
    }
    sound():void{
        console.log(`${this.name} makes a sound`);
        
    }
}
class Dog extends Animal{
    constructor(name :string)
    {
        super(name);
    }
    sound(): void {
        console.log(`${this.name} barks`);
    }
}
class cat extends Animal{
    constructor(name :string)
    {
        super(name);
    }
    sound(): void {
        console.log(`${this.name} mewo's`);
        
    }
}
const animal=new Dog("whisky");
const animalcat=new cat("Reena");
animal.sound();
animalcat.sound();