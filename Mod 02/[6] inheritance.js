// Inheritanc
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // Output: Buddy barks.

class Cat extends Animal {
    constructor(name, color) {
        super(name); // Call the parent class constructor
        this.color = color;
    }
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const myCat = new Cat('Whiskers', 'Gray');
myCat.speak(); // Output: Whiskers meows.