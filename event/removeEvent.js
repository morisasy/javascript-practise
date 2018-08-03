var buttons = document.getElementsByTagName("button");

// this will NOT work 
buttons.removeEventListener("click", function(){
    alert("You just clicked a button");
});

// we have to remove the event listener to each button but this STILL won't work! That is because we are using an annonymous function
for(var i=0; i<buttons.length; i++){
    buttons[i].removeEventListener("click", function(){
        alert('You just clicked on a button!');
    });
}