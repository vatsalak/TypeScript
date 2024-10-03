//Default enums in type scripts by default type script assigns it to 0
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["South"] = 1] = "South";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["Wesr"] = 3] = "Wesr";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection); //O/p=0
//currentDirection='North';Error
console.log(CardinalDirections);
//Initialised enums we can have the first numeric enum and have it auto increamented from that
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["Norths"] = 1] = "Norths";
    CardinalDirection[CardinalDirection["Souths"] = 2] = "Souths";
    CardinalDirection[CardinalDirection["Esats"] = 3] = "Esats";
    CardinalDirection[CardinalDirection["Wests"] = 4] = "Wests";
})(CardinalDirection || (CardinalDirection = {}));
console.log(CardinalDirection.Norths); //O/p=1
console.log(CardinalDirection);
//Numeric enums fully initialised
//We can assign/initialize unique number values for each enum value.Then the values will not be increamented automatically
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 202] = "Success";
    statusCode[statusCode["Accepted"] = 200] = "Accepted";
    statusCode[statusCode["Rejected"] = 100] = "Rejected";
})(statusCode || (statusCode = {}));
console.log(statusCode.NotFound);
console.log(statusCode);
