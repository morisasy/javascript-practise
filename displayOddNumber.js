var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
    for(var i = 0; i < numbers.length; i++){
        // if the value we are at in the array is not divisible by 2 (it's an odd number)
        if(numbers[i] % 2 !== 0){
            // print out that value!
            console.log(numbers[i]);
        }
    }
}