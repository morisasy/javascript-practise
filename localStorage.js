
// adding objects

localStorage.setItem("instructor", "Elie");
localStorage.setItem("favoriteNumber", 18);
localStorage.setItem("isHilarious", true);


// retrieving an object
localStorage.getItem("instructor"); // "Elie"


// remove an object
localStorage.removeItem("instructor");
localStorage.clear();



// Adding object

var instructors = ["Elie", "Matt", "Tim"];

localStorage.setItem("instructors", instructors);
localStorage.getItem("instructors");



var instructors = ["Elie", "Matt", "Tim"];

// the JSON.stringify call converts the instructors array into a JSON string
localStorage.setItem("instructors", JSON.stringify(instructors));

// JSON.parse converts the JSON string back into JavaScript (in this case, a valid array)
JSON.parse(localStorage.getItem("instructors"));