class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi(){
        return `${this.firstName} ${this.lastName} says hello!`;
    }
    static isPerson(person){
        return person.constructor === Person;
    }
}