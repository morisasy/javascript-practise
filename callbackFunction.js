function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function math(a,b,callback){
    return callback(a,b);
}

math(1,4,add); // returns 5
math(5,5,subtract); // returns 0
