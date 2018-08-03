var arr = [1,2,3,4,5]
arr.filter(function(val){
    return val % 2 !== 0; // only keep odd numbers
}).map(function(val){
    return val * 2; // double remaining values
}).reduce(function(acc,next){
    return acc + next; // add everything up
},0) // 18
