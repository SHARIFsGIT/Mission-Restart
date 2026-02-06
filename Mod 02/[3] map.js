// Normal method to square numbers
const numberArray = [1, 2, 3, 4, 5];
const doubleArray = [];
for (const num of numberArray) {
    doubleArray.push(num * num);
}

// Mapping to square numbers: Using map to create a new array by transforming each element. It returns a new array.
const squaredArray = numberArray.map(num => num * num);
console.log('Original Array:', numberArray);
console.log('Doubled Array using loop:', doubleArray);
console.log('Squared Array using map:', squaredArray);