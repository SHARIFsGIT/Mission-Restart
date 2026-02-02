const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers)

const maxNumber = Math.max(numbers); // Incorrect usage
console.log('Max number is:', maxNumber);

const correctMaxNumber = Math.max(...numbers); // Correct usage with spread operator
console.log('Correct max number is:', correctMaxNumber);

const first = [1, 2, 3];
const second = first; // Reference assignment
second.push(4);
console.log('First array after modifying second:', first);

const first1 = [1, 2, 3];
const second1 = [...first1]; // Shallow copy using spread operator
second1.push(4);
console.log('First array after modifying second:', first1);
console.log('Second array:', second1);

const first2 = [1, 2, 3];
const second2 = [...first2, 4, 5, 6]; // Merging arrays using spread operator
console.log('Merged array:', second2);

const ages = [25, 30, 35];
const prices = [100, 200, 300];
const combined = [...ages, 500, ...prices]; // Combining multiple arrays
console.log('Combined array:', combined);

const person = { name: 'Alice', age: 30 };
const updatedPerson = { ...person, age: 31 }; // Updating object property using spread operator
console.log('Updated person:', updatedPerson);

const person1 = { name: 'Bob', city: 'New York' };
const personDetails = { ...person1, age: 25, country: 'USA' }; // Adding new properties to object
console.log('Person details:', personDetails);

const total = (a, b, c) => a + b + c;
const result = total(10, 20, 30);
console.log('Total result:', result);
const higherNumbers = [10, 20, 30];
const totalWithSpread = total(...higherNumbers); // Using spread operator to pass array elements as arguments
console.log('Total with spread:', totalWithSpread);