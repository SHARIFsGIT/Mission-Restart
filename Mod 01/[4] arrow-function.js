sum(10, 20); // arguments provided for both parameters
// Function declaration
function sum(a = 0, b = 0) {
    console.log(a + b);
}

// Function expression
const multiply = function(a = 1, b = 1) {
    return a * b;
};
const result = multiply(5); // b will use default value
console.log(result);

// Arrow function
const divide = (a = 1, b = 2) => a / b;
const divisionResult = divide(10);
console.log(divisionResult);

// Multiline arrow function
const subtract = (a = 0, b = 0) => {
    const makeupValue = 5;
    return a - b + makeupValue;
};
const subtractionResult = subtract(20, 10);
console.log(subtractionResult);