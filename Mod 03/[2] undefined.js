let money;
console.log(money) // undefined

money = 100;
console.log(money) // 100

function greet() {
    console.log('Hello, World!');
}
console.log(greet) // [Function: greet]
console.log(greet()) // Hello, World! and undefined (because greet() does not return anything)

let person = {
    name: 'Alice',
    age: 25
};
console.log(person.address) // undefined

const banks = ['Bank A', 'Bank B', 'Bank C'];
console.log(banks[3]) // undefined
delete banks[1];
console.log(banks[1]) // undefined