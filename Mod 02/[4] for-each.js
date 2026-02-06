// forEach: forEach does not return a new array; it simply executes the provided function once for each array element.
const numbers = [10, 20, 30, 40];
numbers.forEach((num, index) => {
    console.log(`Index ${index}:`, num * num);
});
const [first, second, ...rest] = numbers;
console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);

// Filtering even numbers using forEach
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log('Even Numbers using forEach:', evenNumbers);

// Find: Using find to locate the first element that satisfies a condition. It returns the value of the first element that matches the condition, or undefined if no match is found.
const foundNumber = mixedNumbers.find(num => num > 5);
console.log('First number greater than 5:', foundNumber);

// Find using objects
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const names = users.map(user => user.name);
console.log('User Names:', names);
const userWithId2 = users.find(user => user.id === 2);
console.log('User with ID 2:', userWithId2);

// Reduce: Using reduce to accumulate values in an array. It processes each element and reduces the array to a single value.
const sum = mixedNumbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of Mixed Numbers:', sum);