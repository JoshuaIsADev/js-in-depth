/*
const nums = [1, 2, 3, 4, 5, 6];

const sum = (array, index) => {
  //base case
  if (index === array.length - 1) {
    console.log(`base case: ${index}`);
    return array.length - 1;
  }

  //recursive case(s)
  console.log(`at index: ${index}`);
  const total = array[index] + sum(array, index + 1);
  console.log(`total at index: ${index} is ${total}`);
  return total;
};

const result = sum(nums, 0);
console.log(result);
*/
/*
//mine example
const mine = {
  gold: 3,
  left: {
    gold: 2,
    left: {
      gold: 4,
    },
    right: {
      gold: 1,
    },
  },
  right: {
    gold: 5,
    right: {
      gold: 1,
    },
  },
};

const countGold = (level) => {
  let total = level.gold;
  if (level.left) {
    total += countGold(level.left);
  }
  if (level.right) {
    total += countGold(level.right);
  }
  return total;
};

const result = countGold(mine);

console.log(result);
*/

/*
//warmup
const fizzbuzz = (startNum, endNum) => {
  //base case
  if (startNum === endNum + 1) {
    return;
  }
  // console.log(startNum);

  //recursive case
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (startNum % 3 === 0) {
    console.log(`Fizz ${startNum}`);
  } else if (startNum % 5 === 0) {
    console.log(`Buzz ${startNum}`);
  } else {
    console.log(startNum);
  }
  // const total = startNum + 1;
  // fizzbuzz(total, endNum);
  fizzbuzz(startNum + 1, endNum);
};

fizzbuzz(0, 40); //function calls take up memory, better to use loops
*/
/*
//excercise 1
const palindrome = function (str) {
  //base

  palindrome(str);

  // console.log(letter);
  // console.log(str[str.indexOf[letter]]);
  // if (letter === str[str.indexOf[letter]]) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // console.log(str.indexOf(letter) === str.lastIndexOf(letter));
  // if (letter === str[str.length - 1]) {
  //   console.log(true);
  // } else {
  //   console.log('not a palindrome');
  // }

  //base case
  // if (letter === str[(str.length - 1) / 2]) {
  //   return;
  //   console.log(true);
  // }

  //recursion
};

palindrome('level');
*/
/*
//excercise 2
const flatten = (array) => {
  const result = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      const flattened = flatten(element);
      for (const innerElement of flattened) {
        result.push(innerElement);
      }
    } else {
      result.push(element);
    }
  }

  return result;
};

console.log(flatten([1, 2, 3]));
console.log(flatten([1, 2, 3, [2, 4, 6], 7]));
console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
*/

//excercise 3
const objectSample = {
  id: 1,
  name: 'Bob',
  happy: true,
  friend: {
    id2: 2,
    name2: 'Alice',
    happy2: true,
    friend: {
      id3: 3,
      name3: 'oof',
      happy3: true,
      hi: [1, 2, 3],
      bye: (str) => console.log(str),
      oof: null,
      foof: undefined,
    },
  },
};

const flatten = (obj) => {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    // console.log(key);
    if (typeof value === 'object') {
      // console.log(value);
      const flattened = flatten(value);
      result = { ...result, ...flattened };
      return result;
      // flatten(Object.entries(value));
    } else {
      result[key] = value;
    }
  }
  return result;
};

// console.log(typeof objectSample == 'object');
// console.log(objectSample);
console.log(flatten(objectSample));
