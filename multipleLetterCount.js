
function multipleLetterCount(str){
  var finalObj = {};
  for(var i =0; i< str.length; i++){
    if (!(str[i] in finalObj)){
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}