var listItems = document.querySelectorAll('li');

// Let's access each value using the event.target property!

for(var i=0; i<listItems.length; i++){
    listItems[i].addEventListener("click", function(event){
        alert("You just clicked on " + event.target.innerText);
    });
}