/*
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello my friend!');
    // resolve('Here is your ice cream');
    reject("Sorry, we're out of ice cream");
  }, 1000);
});

myPromise
  .then((resolvedValue) => {
    console.log('promise seems to be done');
    console.log(resolvedValue);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('Hello?');
console.log(myPromise);
*/

//warmup
/*
console.log('program started');
const warmup = new Promise((resolve, reject) => {
  console.log('program in progress');
  setTimeout(() => {
    resolve('program completed');
    reject('program error');
  }, 3000);
});

console.log(warmup);

warmup
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((error) => {
    console.log(error);
  });
*/
// excercise 1
/*
console.log('Program started');
const excercise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('program complete');
  }, 3000);
  setTimeout(() => {
    reject('program failure');
  }, 2000);
});

console.log(excercise1);

excercise1
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((error) => {
    console.log(error);
  });
*/

//excercise 2
/*
console.log('Program started');
const excercise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Step 1 complete');
  }, 3000);
});

console.log(excercise2);

excercise2
  .then((resolvedValue) => {
    console.log(resolvedValue);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Step 2 complete');
      }, 5000);
    });
  })
  .then((resolvedValue2) => {
    console.log(resolvedValue2);
  });
*/

// excercise 3
console.log('Program started');
const excercise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: 'Hello friend!', error: null });
  }, 5000);
});

console.log(excercise3);

excercise3
  .then((resolvedData) => {
    console.log(resolvedData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('First promise chain complete');
      }, 2000);
    });
  })
  .then((resolvedData) => {
    console.log(resolvedData);
  });

excercise3
  .then((resolvedData) => {
    console.log(resolvedData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Second promise chain complete');
      }, 10000);
    });
  })
  .then((resolvedData) => {
    console.log(resolvedData);
  });
