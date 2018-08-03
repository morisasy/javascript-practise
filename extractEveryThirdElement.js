function extractEveryThird(arr){
    var newArr = [];
    for(var i = 2; i < arr.length; i += 3){
        newArr.push(arr[i]);
    }
    return newArr;
}