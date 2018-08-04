function double(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(2 * array[i]);
    }
    return newArray;
}