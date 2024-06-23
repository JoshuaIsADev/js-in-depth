/*
//warmup
const createCounter = () => {
  let counter = 0;

  function incrementCounter() {
    counter += 1;
    console.log(counter);
  }

  return incrementCounter;
};

const counter = createCounter();
counter();
counter();
counter();
*/

/*
//excercise 1
const stringBuilder = () => {
  let result = '';

  function add(character) {
    result = result.concat(character);
    return result;
    // console.log(result);
  }

  return add;
};

const builder = stringBuilder();
let text = builder('Hello ');
text = builder('there ');
text = builder('friend');
console.log(text);
*/

/*
//excercise 2
const createVendingMachine = () => {
  const stock = ['cola', 'chips', 'chocolate', 'nuts'];
  let coins = 0;

  function add25() {
    coins += 25;
    if (coins == 100) {
      const randomStockItem = stock[Math.floor(Math.random() * stock.length)];
      console.log(`You got some ${randomStockItem}`);
      coins = 0;
    } else {
      console.log(`Insert ${100 - coins} more coins`);
    }
  }
  return add25;
};

const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
*/

//excercise 3
const createDatabase = () => {
  const storage = ['apple', 'banana', 'carrot'];

  function addToDb(arg) {
    storage.push(arg);
    console.log(storage);
  }

  function clearDb() {
    storage.length = 0;
    console.log(storage);
  }

  return [addToDb, clearDb];
};

const [addToDb, clearDb] = createDatabase();
addToDb('candy');
clearDb();
addToDb('chicken');
