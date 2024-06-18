/*
//warmup 1
function fetchPokemon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({
      //   data: {
      //     name: 'Pikachu',
      //     power: 20,
      //   },
      // });
      reject(new Error('Something went wrong'));
    }, 2000);
  });
}

console.log('Program starting');

async function useFetchPokemon() {
  try {
    const result = await fetchPokemon();
    console.log(result);
    console.log('Program complete');
  } catch (error) {
    console.error(error);
  }
}

useFetchPokemon();
*/

//excercise 1
/*
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: 'Monkey', admin: true } });
      reject(new Error('something went wrong'));
    }, 3000);
  });
}

function login(object) {
  if (object.data.admin == true) {
    console.log('Successfully logged in');
  } else {
    console.log('Failed to log in, please try again');
  }
}

console.log('Program starting');

async function useFetchUser() {
  try {
    const result = await fetchUser();
    login(result);
    console.log('Program complete');
  } catch (error) {
    console.error(error);
  }
}

useFetchUser();
*/

//excercise 2
function fetchFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fast done!');
    }, 2000);
  });
}

function fetchSlow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Slow done');
    }, 6000);
  });
}

console.log('Program starting');

async function useFetch() {
  const resultFast = await fetchFast();
  const resultSlow = await fetchSlow();
  Promise.all([resultFast, resultSlow]).then((finalResult) => {
    console.log(finalResult);
  });
}

useFetch();
