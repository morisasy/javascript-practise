
function countVowels(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var j = 0; j < arr[i].length; j++){
                if(Array.isArray(arr[i][j])){
                    for(var k = 0; k < arr[i][j].length; k++){
                        if(Array.isArray(arr[i][j][k])){
                            for(var l = 0; l < arr[i][j][k].length; l++){
                                count = countCharacters(arr[i][j][k][l], count)    
                            }
                        } else {
                            count = countCharacters(arr[i][j][k], count)    
                        }
                    }
                } else {
                    count = countCharacters(arr[i][j], count)
                }
            }
        } else {
            count = countCharacters(arr[i], count)   
        }
    }
    return count;
}