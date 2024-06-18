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
