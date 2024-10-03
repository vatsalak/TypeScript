//Default enums in type scripts by default type script assigns it to 0
enum CardinalDirections{
    North,
    South,
    East,
    Wesr
}
let currentDirection=CardinalDirections.North;
console.log(currentDirection);//O/p=0
//currentDirection='North';Error

console.log(CardinalDirections);

//Initialised enums we can have the first numeric enum and have it auto increamented from that
enum CardinalDirection{
    Norths=1,
    Souths,
    Esats,
    Wests

}
console.log(CardinalDirection.Norths);//O/p=1
console.log(CardinalDirection);

//Numeric enums fully initialised
//We can assign/initialize unique number values for each enum value.Then the values will not be increamented automatically
enum statusCode{
    NotFound=404,
    Success=202,
    Accepted=200,
    Rejected=100
}
console.log(statusCode.NotFound);
console.log(statusCode);

