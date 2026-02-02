// Looping through arrays and objects in JavaScript

// Example array
const numbersArray = [1, 2, 3, 4, 5];

// Example object
const numberObject = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
};

// Looping through array using for...of
for (const num of numbersArray) {
    console.log('Array element:', num);
}

// Looping through object using for...in
for (const key in numberObject) {
    console.log('Object key:', key, 'Value:', numberObject[key]);
}   

// Looping through array using traditional for loop
for (let i = 0; i < numbers.length; i++) {
    console.log('Array element using traditional for loop:', numbers[i]);
}

// Looping through object using Object.keys() and forEach
Object.keys(numberObject).forEach(key => {
    console.log('Object key using Object.keys():', key, 'Value:', numberObject[key]);
});

// Looping through object using Object.entries() and for...of
for (const [key, value] of Object.entries(numberObject)) {
    console.log('Object key using Object.entries():', key, 'Value:', value);
}