function singleLetterCount(str1, letter){
  var finalCount = 0;
  for(var i=0; i< str1.length; i++){
    if(str1[i].toLowerCase() === letter.toLowerCase()){
      finalCount++;
    }
  }
  return finalCount;
}