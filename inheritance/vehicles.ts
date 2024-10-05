class Vehicle{
    protected name: string;
    protected speed: number;
    public constructor(name: string,speed:number)
    {
        this.name=name;
        this.speed=speed;
    }
    public canSpeed(){
        console.log(`The vehicle ${this.name} has gear so it can speed upto ${this.speed} km/hr`);
        
    }
}
class ElectricVehicle extends Vehicle{
    protected batteryCapacity:number;
    public constructor(name: string,speed: number,batteryCapacity: number)
    {
        super(name,speed);
        this.batteryCapacity=batteryCapacity;
    }
    public canCharge(){
        console.log(`The vehicle ${this.name} has battery capacity ${this.batteryCapacity}KWH  and so can speed upto ${this.speed}Km/h`);

        
    }
}
let ev=new ElectricVehicle("Hundai",240,24);
ev.canCharge();