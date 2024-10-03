// Extending Interfaces
// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface
// with the same properties as the original, plus something new.
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const Rectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  console.log(Rectangle);
  

  interface flower{
    petal: string;
  }
  interface coloredFlower extends flower{
    color:string;
  }
  const flower: coloredFlower={
    petal:"abc",
    color:"white"

  }
  console.log(flower);
  