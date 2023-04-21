class Car {
   //constructor(make, model, engineCylCount, engineCylConfig, transmissionType)

   constructor(make, model, engineCylCount, engineCylConfig, transmissionType){
       this.make = make 
       this.model = model
       this.engineCylCount = engineCylCount
       this.engineCylConfig = engineCylConfig
       this.transmissionType = transmissionType
   }
   
//    d.	property: engine [object]
// i.	property: cylCount [number]
// ➢	Initialized from constructor parameter.
// ii.	property: cylConfig [string]
// ➢	Initialized from constructor parameter.
// iii.	property: running [boolean]
// ➢	Initialized to false.
   engine = {
    cylCount: this.engineCylCount,
    cylConfig: this.engineCylConfig,
    running: false
    }

    // e.	property: transmission [object]
    // i.	property: type [string]
    // ➢	Initialized from constructor parameter.
    transmission = {
        type: this.transmissionType  
    }

    // f.	property: odometerKM [number]
    // i.	Initialized to 0.

    odometerKM = 0
//     g.	method: startEngine()
// i.	Sets the engine’s running property to true, if it is false.
// ii.	If the engine’s running property is already true, throw an exception.
startEngine() {
    if(this.engine.running == false){
       this.engine.running = true    
    }

    // code incomplete
   
   }
//    h.	method: stopEngine()
//    i.	Sets the engine’s running property to false, if it is true.
//    ii.	If the engine’s running property is already false, do nothing.
   stopEngine() {
       if(this.engine.running == ture){
           this.engine.running = false
        }
   }
//    i.	method: drive(distance [number])
//    i.	If the engine is currently not running, throw an exception.
//    ii.	Increase the odometerKM by a value equal to the distance parameter.
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

car1 = new Car ("2009", "toyota", 4, "v", "auto")

car1.startEngine()

car1.drive(100)

car1.drive(50)

car1.stopEngine()

console.log(car1.odometerKM)