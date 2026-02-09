// JavaScript Objects and JSON

console.log('=== JavaScript Objects ===\n');

// Creating objects
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  isStudent: false
};

console.log('Person object:', person);
console.log('Access property:', person.name);
console.log('Access property:', person['age']);
console.log();


// Nested objects
const user = {
  name: 'Bob',
  address: {
    street: '123 Main St',
    city: 'Boston',
    zip: '02101'
  },
  hobbies: ['reading', 'coding', 'gaming']
};

console.log('Nested object:', user);
console.log('Nested property:', user.address.city);
console.log('Array in object:', user.hobbies[0]);
console.log();


console.log('=== JSON.stringify() ===\n');
console.log('Converts JavaScript object to JSON string\n');

const data = {
  id: 1,
  name: 'Product',
  price: 29.99,
  inStock: true
};

const jsonString = JSON.stringify(data);
console.log('Object:', data);
console.log('JSON string:', jsonString);
console.log('Type:', typeof jsonString);
console.log();

// Pretty print JSON
const prettyJson = JSON.stringify(data, null, 2);
console.log('Pretty JSON:');
console.log(prettyJson);
console.log();


console.log('=== JSON.parse() ===\n');
console.log('Converts JSON string to JavaScript object\n');

const jsonText = '{"name":"Charlie","age":30,"active":true}';
console.log('JSON string:', jsonText);
console.log('Type:', typeof jsonText);

const obj = JSON.parse(jsonText);
console.log('Parsed object:', obj);
console.log('Type:', typeof obj);
console.log('Access property:', obj.name);
console.log();


console.log('=== Array of Objects ===\n');

const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' }
];

console.log('Array of objects:', users);
console.log('First user:', users[0]);
console.log('First user name:', users[0].name);
console.log();

const usersJson = JSON.stringify(users, null, 2);
console.log('Array as JSON:');
console.log(usersJson);
console.log();