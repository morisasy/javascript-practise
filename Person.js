function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

window.firstName; // undefined
window.lastName; // undefined

var elie = Person('Elie', 'Schoppik');
elie; // undefined

window.firstName; // 'Elie'
window.lastName; // 'Schoppik'


var elie = new Person('Elie', 'Schoppik');
elie // {firstName: 'Elie', lastName: 'Schoppik'



Person.prototype.siblings = ["Haim", "David"];

var elie = new Person("Elie");

elie.siblings.push("Tamar"); // returns the new length of the array => 3
// The siblings array will now be ["Haim", "David", "Tamar"]

var anotherPerson = new Person("Mary");

anotherPerson.siblings.push("Leslie");
elie.siblings; // ["Haim", "David", "Tamar", "Leslie"]
