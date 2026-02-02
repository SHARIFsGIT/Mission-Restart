function sum(num1, num2){
    // num1 and num2 are required parameters
    const total = num1 + num2;
    console.log(total);
}
sum(10, 20); // arguments provided for both parameters

// Using default parameters
function multiply(num1 = 1, num2 = 10){
    // num1 and num2 have default values of 1
    const total = num1 * num2;
    console.log(total);
}
multiply(5, 4); // arguments provided for both parameters
multiply(5); // argument provided for num1, num2 will use default value
multiply(); // no arguments provided, both parameters will use default values

