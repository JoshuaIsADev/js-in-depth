const mySymbol = Symbol();
console.log(mySymbol === Symbol);

// const character = {
//   name: 'Rick',
//   class: 'Axe Wielder',
//   quote: "I'll never let you down",
//   __admin__: false, // underscore is messy, you may not want to iterate over this
// };
const character = {
  name: 'Rick',
  class: 'Axe Wielder',
  quote: "I'll never let you down",
  [Symbol('admin')]: false,
  [Symbol('age')]: 32,
  [Symbol.iterator]: function* () {
    //allows you to iterate over an object
    yield 1;
    yield 2;
    yield 'Hello';
  },
};

// for (const key of Object.keys(character)) {
//   console.log(key);
// }
// console.log(Object.getOwnPropertySymbols(character));

for (const value of character) {
  console.log(value);
}
