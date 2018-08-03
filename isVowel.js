function seeIfVowel(char, count){
    var vowels = "aeiou"
    if(vowels.includes(char.toLowerCase())){
        return ++count; // add 1 to count then return the value (this is called a prefix operator)
    }
    return count;
}