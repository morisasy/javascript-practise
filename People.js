function Person(name) {
    this.name = name;
    this.siblings = [];
}

var janey = new Person("Janey");
janey.silbings.push("Annie");

var tim = new Person("Tim");
tim.siblings.push("Nicole");
tim.siblings.push("Jeff");
tim.siblings.push("Greg");
tim.siblings; // Returns ["Nicole", "Jeff", "Greg"];





/* 
	Constructor Function Best Practices

The best practices for creating constructor functions in JavaScript are:

    All of the properties that you do not want to be shared go inside of the constructor function
    All properties that you want to be shared go on the prototype. Almost all of the time, you will want to put functions on the prototype. We will explain why soon!

Using our person example, if we want to add a siblings array to the Person class, we would add it in the constructor:

*/


