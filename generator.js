// //Generator function declaration
// const counter = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// //Create the generator object first
// const counterGenerator = counter(); //this is also an iterator, so you can loop through it

// // console.log(counterGenerator.next()); // have to call next method on counterGenerator
// // console.log(counterGenerator.next());
// // console.log(counterGenerator.next());
// // console.log(counterGenerator.next());

// for (const count of counterGenerator) {
//   console.log(count);
// }
// console.log('all done');

/*
//lazy evaluation... infinite amount of values in almost no memory space. only gets values when called
const counterLazy = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const counterLazyGenerator = counterLazy();

let countLazy = 0;
while (countLazy < 5) {
  console.log(counterLazyGenerator.next());
  countLazy++;
}
*/

/*
//warm up
const countTo10 = function* () {
  let i = 0;
  while (i <= 10) {
    yield i;
    i++;
  }
};

const count10Generator = countTo10();

for (const count of count10Generator) {
  console.log(count);
}
*/

/*
//excercise 1
const randomNumber = function* () {
  while (true) {
    yield Math.floor(Math.random() * 100);
  }
};

const randomGenerator = randomNumber();

let countRandon = 0;
while (countRandon < 10) {
  console.log(randomGenerator.next().value);
  countRandon++;
}
  */

/*
//excercise 2
const randomAmountFromRange = function* (amount, min, max) {
  i = 0;
  while (i < amount) {
    yield Math.floor(Math.random() * (max - min) + min);
    i++;
  }
};

const randomAmountFromRangeGenerator = randomAmountFromRange(3, 10, 20);

for (value of randomAmountFromRangeGenerator) {
  console.log(value);
}
*/

//excercise 3
const getRandomNumber = function* () {
  let i = 0;
  while (true) {
    yield Math.floor(Math.random() * (10 - 0) + 0);
    i++;
  }
};

const getRandomNumberCount = getRandomNumber();
// console.log(getRandomNumberCount.next().value);

const groceryList = function* () {
  const groceries = ['Avocado', 'Cookie', 'Milk', 'Soup', 'Soda'];
  let i = 0;
  while (true) {
    yield groceries[Math.floor(Math.random() * (5 - 0))];
    i++;
  }
};

const getGroceryListCount = groceryList();

let count = 0;
while (count < 5) {
  console.log(
    getRandomNumberCount.next().value,
    ' ',
    getGroceryListCount.next().value
  );
  count++;
}
