const name = 'Bangladesh';
// name = 'India'; // This will throw an error because 'name' is a constant
console.log(name);

let city = 'Dhaka';
city = 'Chittagong'; // This is valid because 'city' is declared with 'let'
console.log(city);

const charge = 100;
// charge = 150; // This will throw an error because 'charge' is a constant
console.log(charge);

const dress = ['Shirt', 'Pant', 'Shoe'];
// dress = ['Saree']; // This will throw an error because 'dress' is a constant
console.log(dress);

dress.push('Saree'); // This is valid because we are modifying the contents of the array, not reassigning it
console.log(dress);

const student = { name: 'Alice', age: 20 };
// student = { name: 'Bob', age: 22 }; // This will throw an error because 'student' is a constant
console.log(student);

student.age = 21; // This is valid because we are modifying a property of the object, not reassigning it
console.log(student);