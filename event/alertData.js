// In order to remove, we have to name our function before adding it instead of adding an anonymous function
function alertData(){
    alert("You just clicked a button");
}

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", alertData);
}

// since we have named our function, we know which one to remove
for(var i=0; i<buttons.length; i++){
    buttons[i].removeEventListener("click", alertData);
}
