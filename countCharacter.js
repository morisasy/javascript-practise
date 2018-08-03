
function countCharacters(str,count){
    for(var i = 0; i < str.length; i++){
        count = seeIfVowel(str[i], count)
    }
    return count
}