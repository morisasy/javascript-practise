

function findIndex(arr, fn){
  for(var i=0; i<arr.length; i++){
    if(fn(arr[i])) return i;
  }
}
