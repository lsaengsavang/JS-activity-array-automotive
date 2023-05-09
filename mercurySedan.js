const VehicleModule = require('./vehicle').Vehicle

let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        this.make = Mercury;
        this.model = model;
        this.year = 1965;
        this.color = color;
        this.passenger = 0;
        this.maxPassengers = 5;
        this.fuel = 10;
        this.speed = 0;
        this.maxSpeed = 160;
        this.mileage = mileage;
        this.started = false;
        this.scheduleService = false;
        this.numberOfWheels = 4;
    }


    start() {
        if (this.fuel > 0) {            
            console.log("engine started!");
            return this.started = true
        } else {
            console.log("engine cannot start");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " has too many passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

    stop() {
      this.started = false;
  }

    checkService() {
      if (this.mileage > 30000) {            
          this.scheduleService = true
          return this.scheduleService;                       
      }
  }



}

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)