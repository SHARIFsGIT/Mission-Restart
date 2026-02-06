class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm at level ${this.level}.`);
    }
}
const player1 = new Player('Alice', 5);
const player2 = new Player('Bob', 10);
player1.introduce();
player2.introduce();