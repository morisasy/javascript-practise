function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
    
    
}

Automobile.prototype.turnOn = function() {
	this.isRunning = true;
}


Automobile.prototype.turnOff = function() {
	this.isRunning = false;
}


Automobile.prototype.honk = function() {
	if (this.isRunning) {
		return 'beep!';
	}
}

