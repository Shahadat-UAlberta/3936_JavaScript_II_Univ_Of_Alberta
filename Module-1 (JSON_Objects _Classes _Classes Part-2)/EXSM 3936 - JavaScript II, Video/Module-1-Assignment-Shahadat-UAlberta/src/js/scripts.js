async function main() {
    // This is where the code you're actually experimenting with goes.
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
            else{
                throw 'Engine is already running';
            }
        }
        stopEngine() {
            if(this.engine.running == true){
                this.engine.running = false
            }
        }
    
    //     i.	method: drive(distance [number])
    // i.	If the engine is currently not running, throw an exception.
    // ii.	Increase the odometerKM by a value equal to the distance parameter.
    
        drive(distance) {
            if (this.engine.running == false){
                throw 'please start the engine first';
            }
            else{
                this.odometerKM = this.odometerKM + distance
            }
            
        }
    }
    
    // 1.	Instantiate a car.
    // 2.	Turn its engine on.
    // 3.	Drive for 100km.
    // 4.	Drive for 50km.
    // 5.	Turn the engine off.
    // 6.	Output the odometer reading to the console.
    
    car1 = new Car( "2009", "benz", 8, "v", "auto")
    
    try {
        car1.startEngine()
    } catch (error) {
        console.log(error)
    }
    
    try {
        car1.drive(100);
    } catch (error) {
        console.log(error);
    }
    
    try {
        car1.drive(50);
    } catch (error) {
        console.log(error);
    }
    
    car1.stopEngine()
    
    console.log(car1.odometerKM)
    
    
    
    
    let prompt = "Please enter your name, or 'Exit' to quit: "
    let name = await input(prompt);

    while (name != "Exit") 
    {
        output("Hello, "+name+"!");
        name = await input(prompt);
    }
}



