function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    if (year !== undefined) {
        this.year = year;
    }
}

Automobile.prototype.year = 2016;



var newCar = new Automobile("Ferrari", "488 Spider");

// In this case, we did not pass in a year,
// so it was never set in the constructor function
newCar.hasOwnProperty("year"); // Returns false

newCar.year; // returns 2016