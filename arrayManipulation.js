
function arrayManipulation(arr, command, position, val){
  if(command === 'remove'){
    if(position === 'end'){
      return arr.pop();
    }
      return arr.shift();
  }
  else if(command === 'add'){
    if(position === 'end'){
      arr.push(val)
      return arr;
    }
    arr.unshift(val)
    return arr;
  }
}