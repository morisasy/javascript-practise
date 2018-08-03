function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
}

var firstClass = createInstructors();
firstClass.addInstructor("Jennifer");
firstClass.showInstructors(); // ["Elie", "Matt", "Tim", "Jennifer"]

var secondClass = createInstructors();
secondClass.addInstructor("Ashley"); // ["Elie", "Matt", "Tim", "Ashley"]

// on one line

var instructors = createInstructors().showInstructors(); ["Elie", "Matt", "Tim"]