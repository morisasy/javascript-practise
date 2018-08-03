var buttons = document.getElementsByTagName("button");

// this will NOT work - what kind of error do you get?
buttons.addEventListener("click", function(){
    alert("You just clicked a button");
});

// we have to add the event listener to each button
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        alert('You just clicked on a button!');
    });
}