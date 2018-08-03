// Option 1: - directly in HTML. Note that in your HTML, 
// the first button makes reference to a function called firstClick 
// in the onclick attribute
function firstClick(){
    alert("you clicked the first button!");
}

// Option 2 - attach the function to the element
var secondButton = document.querySelector('.second_button');
secondButton.onclick = function(){
    alert("you clicked the second button!");
}
// Option 3 - use addEventListener
var thirdButton = document.querySelector('.third_button');
thirdButton.addEventListener("click", function(){
    alert("you clicked the third button!");
});
