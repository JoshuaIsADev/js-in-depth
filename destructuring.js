/*
//warmup
const jungle = ['Monkey', 'Lion', 'Poanda', 'Rabbit', 'Squirrel'];

const [, lion, , rabbit] = jungle;

console.log(lion);
console.log(rabbit);
*/

/*
//excercise 1
const snacks = {
  chips: { name: 'Pringles', salty: true },
  candy: { name: 'Twizzlers', salty: false },
  chocolate: { name: 'Mars', salty: false },
};

// const { candy } = snacks;
const { candy, fruit = { name: 'Banana', salty: false } } = snacks;
console.log(candy);
console.log(fruit);
*/

/*
//excercise 2
const store = new Map();

store.set('Cups', 46);
store.set('Candles', 121);
store.set('Vases', 15);

console.log(store);

for (const item of store) {
  const [name, qty] = item;
  console.log(name, ' => ', qty);
}
*/

// excercise 3
// function xyzCalc(object) {
//   const { x, y, z } = object;
//   return 5 * x - 2 * y - z;
// }
function xyzCalc({ x, y, z }) {
  return 5 * x - 2 * y - z;
}

console.log(xyzCalc({ x: 20, y: 2, z: 7 }));
