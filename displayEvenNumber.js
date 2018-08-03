var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayEvenNumbers(){
    for(var i = 0; i < numbers.length; i++){
        // if the value we are at in the array is divisible by 2 (it's an even number)
        if(numbers[i] % 2 === 0){
            // print out that value!
            console.log(numbers[i]);
        }
    }
}
