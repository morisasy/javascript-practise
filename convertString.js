function convert(str){
    return str.toUpperCase().split('').filter(function(val){
        return val.match(/[AEIOU]/);
    }).join(":")
}

convert("hello") // "O:E"
