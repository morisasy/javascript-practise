var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstOddNumber(){
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            // print out that value, using return gets us out of the function!
            return numbers[i];
        }
    }
}