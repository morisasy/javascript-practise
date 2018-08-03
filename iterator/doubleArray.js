function double(arr){
    var doubledArr = [];
    arr.forEach(function(val){
        doubledArr.push(val*2);
    })
    return doubledArr;
}



// Here is how we can refactor our double method to use map
function doubleArray(arr){
    // return the result of arr.map
    return arr.map(function(val){
        // return a new array with each value doubled
        return val *2;
    });
}

doubleArray([2,4]); // [4,8]


// filter

var arr = [1,2,3,4];
var valuesGreaterThanTwo = arr.filter(function(val){
    return val > 2; 
});

valuesGreaterThanTwo // [3,4]


// reduce


var arr = [2,4,6,8];
arr.reduce(function(acc,next){
    return acc + next;
},5);

/*
In the first iteration, acc is 5 and next is 2; the callback returns 5 + 2 = 7.
In the second iteration, acc is 7 and next is 4; the callback returns 7 + 4 = 11.
In the third iteration, acc is 11 and next is 6; the callback returns 11 + 6 = 17.
In the last iteration, acc is 17 and next is 8; the callback returns 17 + 8 = 25.
Now the array is exhausted, so reduce returns 25 (which is the sum of all elements in the array, plus 5)
*/

var arr = [2,4,6,8];
arr.reduce(function(acc,next){
    return acc + next;
});



var arr = [1,2,3,4];
arr.reduce(function(acc,next){
    if(next >= 2){
        acc['key' + next] = next;
    } 
    return acc;
},{});