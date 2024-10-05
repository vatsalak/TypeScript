//classes can be written in a way that allows them to be used as a base classes
//for other classes without having to implement all the members.
//This is done using the abstract keyword
//Members that are left unimplemente also use the abstract keyword
abstract class polygon {
   public abstract getArea():number;
   public toString(): string{
    return `Polygon[area=${this.getArea()}]`;
   }
} 
class Rectangle extends polygon{
    public constructor(protected readonly width:number,protected readonly height:number)
    {
        super();
    }
    public getArea(): number {
        return this.width*this.height;
    }
}
let rect=new Rectangle(56,89);
console.log(rect.getArea());
console.log(rect.toString());