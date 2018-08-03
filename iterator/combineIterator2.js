var arr = [1,2,3,4,5];

function isNumberOdd(val) {
    return val % 2 === 1;
}

function doubleValue(val) {
    return val * 2;
}

function sum(a,b) {
    return a + b;
}

arr.filter(isNumberOdd)
    .map(doubleValue)
    .reduce(sum,0); // 18