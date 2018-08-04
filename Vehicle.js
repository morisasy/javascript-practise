function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

function Motorcycle(make,model,year,motorcycleType){
    Vehicle.call(this,make,model,year)
    this.motorcycleType = motorcycleType;
}

var moto = new Motorcycle("Kawasaki", "Ninja 500", 2006, "Sports")