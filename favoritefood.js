var favoriteFoods = ['pizza', 'ice cream'];
function randomFood(){
    // lets find a random number between 0 and 1 and multiply it by the length of the array. This will give us a number between 0 and 2. If we always round down, we will get either 0 or 1, so we can use Math.floor to round down.
    var randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[randomIndex]);
}
