//Overriding of a shape
// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.
interface shapes{
  getArea: ()=> number;
}
class Rectangle implements shapes{
    protected length:number;
    protected width:number;
    constructor(length: number,width: number ){
        this.length=length;
        this.width=width;
    }
    public getArea():number {
        return this.length*this.width;
    }
    public toString():string{
        return `This is Rectangle with width ${this.width}and length ${this.length}`;
    }
}
class Square extends Rectangle{
   
    constructor(length: number)
    {
        super(length,length);
    }
    public override toString(): string {
        return `This is square with width ${this.length}`;
    }
}
let sq=new Square(90);
console.log(sq.getArea());
console.log(sq.toString());