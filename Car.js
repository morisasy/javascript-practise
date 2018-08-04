function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

var car = new Car("Buatti", "Chiron", 2017);
car.__proto__ === Car.prototype // true




var nissa = new Car('Nissan', 'QashQai', 2017);
var bmw = new Car('BMW', 'X6', 2017);

nissa.make;  // Returns "Ford"
bmw.year;   // Returns 2014