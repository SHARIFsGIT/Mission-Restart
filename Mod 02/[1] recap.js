// var, let, const

// var
var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar:', nameVar);

// let
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet:', nameLet);

// const
const nameConst = 'Frank';
// nameConst = 'Gunther'; // This will throw an error
console.log('nameConst:', nameConst);

// Default function parameters
function greet(name = 'Guest', age = 30) {
    return `Hello, ${name}. You are ${age} years old.`;
}
console.log(greet());
console.log(greet('Alice', 25));

// Template strings
const student = {
    name: 'Bob',
    age: 22,
    marks: 88,
    location: 'New York',
};
const friends = ['Charlie', 'David', 'Eve'];
const dynamicString = `Student ${student.name} aged ${student.age} from ${student.location} has scored ${student.marks + 10}.
Friends: ${friends.join(', ')} but ${friends[0]} is the best.`;
console.log(dynamicString);

// Arrow functions
const add = (a, b) => a + b;
console.log('Add:', add(3, 4));

const square = x => x * x;
console.log('Square:', square(5));

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log('Combined Array:', combinedArr);

// Object destructuring
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
};
const { firstName, lastName } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
const printFullName = ({ firstName, lastName }) => {
    console.log(`Full Name: ${firstName} ${lastName}`);
};
printFullName(person);

// Array destructuring
const numbers = [10, 20, 30, 40];
const [num1, num2, ...rest] = numbers;
console.log('Num1:', num1);
console.log('Num2:', num2);
console.log('Rest:', rest);