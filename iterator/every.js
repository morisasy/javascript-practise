var arr = [1,2,3,4];

var everythingGreaterThanTwo = arr.every(function(val){
    return val > 2;
});

var everythingLessThanFive = arr.every(function(val){
    return val < 5;
});

everythingGreaterThanTwo; // false
everythingLessThanFive; // true