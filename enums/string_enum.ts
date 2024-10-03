//Enums can contain string This is more common than numeric enums because of their readability and intent
enum Directions{
    North='North',
    South="South",
    West="West",
    East="East"
}
console.log(Directions.North);
console.log(Directions);

//Using an object to simulate mixed type of an enum
const MixedEnum={
    Active:1,
    Inactive:"Inactive"
} as const; 
console.log(MixedEnum);
