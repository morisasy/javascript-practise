var arr = [1,2,3,4];

var anythingGreaterThanTwo = arr.some(function(val){
    return val > 2;
});

var anyStrings = arr.some(function(val){
    return typeof val === "string";
});

anythingGreaterThanTwo; // true
anyStrings; // false