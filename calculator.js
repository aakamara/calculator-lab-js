const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
}
// const subtract = (a, b) => a - b;

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a/b;
}

const modulus = function(a, b){
    return a%b;
}

const even = function(num){
    return num % 2 === 0 ? 'even' : 'odd';
}

const odd = function(a, b){
    return true;
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
