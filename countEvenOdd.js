function countEvensAndOdds(arr){
    var countObj = {
        oddCount: 0,
        evenCount: 0
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            countObj.evenCount++;
        } else {
            countObj.oddCount++;
        }
    }
    return countObj;
}