
function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}