class Car {
    constructor(make, model, engineCylCount, engineCylConfig, transmissionType){
        this.make = make
        this.model = model
        this.engineCylCount = engineCylCount
        this.engineCylConfig = engineCylConfig
        this.transmissionType = transmissionType
    }
    engine = {
        cylCount: this.engineCylCount,
        cylConfig: this.engineCylConfig,
        running: false
    }    
    transmission = {
        type: this.transmissionType
    }

    odometerKM = 0
//     g.	method: startEngine()
// i.	Sets the engine’s running property to true, if it is false.
// ii.	If the engine’s running property is already true, throw an exception.
    startEngine() {
        if( this.engine.running == false){
            this.engine.running = true
        }

        // code incomplete
    }
    stopEngine() {
        if(this.engine.running == true){
            this.engine.running = false
        }
    }
    drive(distance) {
        this.odometerKM = this.odometerKM + distance
    }
}

// 1.	Instantiate a car.
// 2.	Turn its engine on.
// 3.	Drive for 100km.
// 4.	Drive for 50km.
// 5.	Turn the engine off.
// 6.	Output the odometer reading to the console.

car1 = new Car( "2009", "benz", 8, "v", "auto")

car1.startEngine()

car1.drive(100)

car1.drive(50)

car1.stopEngine()

console.log(car1.odometerKM)


