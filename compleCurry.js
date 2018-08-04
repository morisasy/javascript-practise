var join = complexCurry(function(str, arr){
    return arr.join(str);
})

var filter = complexCurry(function(fn,arr){
    return arr.filter(fn);
})

var isVowel = complexCurry(function(char){
    return char.match(/[AEIOU]/);
})

var split = complexCurry(function(delimiter, str){
    return str.split(delimiter);
})

var toUpperCase = complexCurry(function(str){
    return str.toUpperCase();
})

var convertLetters = compose(join(':'), filter(isVowel), split(''),toUpperCase());

console.log(convertLetters('This is some pretty crazy stuff')); // I:I:O:E:E:A:U
