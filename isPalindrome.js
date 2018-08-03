
function isPalindrome(str){
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

  // for(var i =0; i<str.length/2; i++){
  //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
  //     return false;
  //   }
  // }
  // return true;
}