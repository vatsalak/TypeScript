//Enums can contain string This is more common than numeric enums because of their readability and intent
var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["South"] = "South";
    Directions["West"] = "West";
    Directions["East"] = "East";
})(Directions || (Directions = {}));
console.log(Directions.North);
console.log(Directions);
//Using an object to simulate mixed type of an enum
var MixedEnum = {
    Active: 1,
    Inactive: "Inactive"
};
console.log(MixedEnum);
