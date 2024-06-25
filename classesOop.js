class Player {
  age = 20;
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  speak(phrase) {
    console.log(`${this.name} says: "${phrase}"`);
  }
}

const hanSolo = new Player('Han Solo', 100, 10, ['blaster']);
const joshua = new Player('Joshua', 122, 23, ['rifle', 'bazooka']);

hanSolo.speak('Never tell me the odds');
joshua.speak('Ok... the odds are 3 to 1');

console.log(hanSolo);
console.log(joshua);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

// function AnotherPlayer() {}

// const darthVader = new AnotherPlayer();

// console.log(hanSolo);
// console.log(Object.getOwnPropertyNames(darthVader));
// console.log(Object.getOwnPropertyNames(darthVader.__proto__));
