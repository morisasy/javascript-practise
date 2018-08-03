// OPTION 1: listening on the parent
var ul = document.querySelector("ul");

// how many event listeners?
ul.addEventListener("click", function(event){
    alert("You just clicked on " + event.target.innerText);
});

// OPTION 2: listening on the children
var listItems = document.getElementsByTagName("li");

// how many event listeners?
for(var i=0; i<listItems.length; i++){
    listItems[i].addEventListener("click", function(event){
        alert("You just clicked on " + event.target.innerText);
    });
}