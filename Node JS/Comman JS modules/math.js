// instead of two lines of code i.e., defining and then exporting, below one
// can be implemented
// 1. if only export of one function is done
module.exports = (a,b) => {
    return a+b;
}

// 2. if there is an object which is exported
const subtract = (a,b) => {
    return a-b;
}

const mul = (a,b) => {
    return a*b;
}

module.exports = {
    subtract,
    mul
}

// or
module.exports.subtract = (a,b) => {
    return a-b;
}

module.exports.mul = (a,b) => {
    return a*b;
}

// or
exports.subtract = (a,b) => {
    return a-b;
}

exports.mul = (a,b) => {
    return a*b;
}