class Vehicle{
    constructor(make, model, engineCylCount, engineCylConfig, transmissionType){
        this.make = make;
        this.model = model;
        this.engineCylCount = engineCylCount;
        this.engineCylConfig = engineCylConfig;
        this.transmissionType = transmissionType;
    }
    engine = {
        cylCount: this.engineCylCount,
        cylConfig: this.engineCylConfig,
        running: false
    }
    transmission = {
        type: this.transmissionType
    }
    odometerKM = 0; 

    startEngine() {
        if( this.engine.running == false){
            this.engine.running = true
        }
        else{
            throw 'Engine is already running';
        }
    }
    stopEngine() {
        if(this.engine.running == true){
            this.engine.running = false
        }
    }
    drive(distance) {
        if (this.engine.running == false){
            throw 'please start the engine first';
        }
        else{
            this.odometerKM = this.odometerKM + distance
        }
        
    }
    toString(){
        return "This is a general vehicle"
    }
}

class Car extends Vehicle{
    constructor(make, model, engineCylCount, engineCylConfig, transmissionType){
        super(make, model, engineCylCount, engineCylConfig, transmissionType);
    }

    toString(){
        return `A ${this.make} ${this.model} (car) with a ${this.engineCylCount} Cylinder ${this.engineCylConfig} engine that is not currently running, a ${this.transmissionType} transmission, and ${this.odometerKM} kilometers on the odometer.`;
    }
}

class PickupTruck extends Vehicle{
    constructor(make, model, engineCylCount, engineCylConfig, transmissionType, payload, bedLength){
        super(make, model, engineCylCount, engineCylConfig, transmissionType);
        this.payload = payload;
        this.bedLength = bedLength;
    }

    toString(){
        return `A ${this.make} ${this.model} (${this.payload} ton pickup truck) with a ${this.engineCylCount} Cylinder ${this.engineCylConfig} engine that is not currently running, a ${this.transmissionType} transmission, a ${this.bedLength} bed, and ${this.odometerKM} kilometers on the odometer.`
    }
}

class Van extends Vehicle{
    constructor(make, model, engineCylCount, engineCylConfig, transmissionType, style){
        super(make, model, engineCylCount, engineCylConfig, transmissionType);
        this.style = style;
    }
    toString(){
        return `A ${this.make} ${this.model} (${this.style} van) with a ${this.engineCylCount} Cylinder ${this.engineCylConfig} engine that is not currently running, a ${this.transmissionType} transmission, and ${this.odometerKM} kilometers on the odometer.`
    }
}

car = new Car("1998", "Ford Taurus", 6, "V6", "5 Speed Manual");

truck = new PickupTruck("1988", "1988 Mitsubishi Mighty Max", 4, "Inline-4", "3 Speed Automatic", .25, "116 inch");

van = new Van("2015", "Dodge Grand Caravan", 6, "V6", "6 Speed Automatic", "passenger");

const vehicles = [car, truck, van];

function vehicle_test(vehicle){
    vehicle.startEngine();
    distance = Math.round((Math.random() * 100) + 50);
    vehicle.drive(distance);
    vehicle.stopEngine();
}
function info(vehicle){
    console.log(vehicle.toString());
}
vehicles.forEach(vehicle_test);
vehicles.forEach(info);



