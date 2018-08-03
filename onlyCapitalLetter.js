function onlyCapitalLetters(str){
    var newStr = '';
    for(var i = 0; i < str.length; i++){
        if(str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64 ){
            newStr += str[i];
        }    
    }
    return newStr;
}