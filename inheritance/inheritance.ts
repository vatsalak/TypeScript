//Interfaces can be used to define the type a class must folllow through implements
//keyword
interface shape{
    getArea:()=>number;
}
class Rectangle implements shape{
    
    public constructor(protected readonly width:number,
        protected readonly height:number){}
    public getArea():number
    {
        return this.height*this.width;
    }
}
class Square extends Rectangle{
    public constructor(width:number)
    {
        super(width,width);
    }
}
let rect=new Rectangle(45,34);
let rectArea=rect.getArea();
let sq=new Square(67);
let sqArea=sq.getArea();
console.log("Area of rectangle is"+rectArea);
console.log("Area of square is"+sqArea);

