// warm up
/*
const points = [10, 15, 20, 30, 5];

const pointsCopy = [...points, 50, 75];

console.log(pointsCopy);
*/

//excercise 1
/*
const views = [
  [5, 10, 20],
  [10, 20, 30],
];
const viewsCopy = [...views];

viewsCopy[1].push(40);
viewsCopy[0].pop(20);
viewsCopy.push([100, 200]);

console.log(views, viewsCopy);
*/

/*
//excercise 2
const animal = {
  name: 'Koala',
  kingdom: 'Australia',
  cute: true,
  friends: [{ name: 'Kangaroo', kingdom: 'Australia' }],
};

const koala = {
  ...animal,
  cute: false,
  tall: false,
  // friends: [{ ...friends, cute: false }],
};

animal.friends[0].cute = false;
console.log(animal, koala);
*/

// excercise 3
const superHero = {
  name: 'Bruce Wayne',
  alias: 'Batman',
  universe: 'DC',
  happy: false,
  enemies: ['Joker', 'Catwoman', 'Bane'],
  bestMovie: {
    title: 'The Dark Knight',
    rating: 95,
  },
};

const superHeroCopy = {
  ...superHero,
  enemies: [...superHero.enemies, 'Poison Ivy'],
  bestMovie: { ...superHero.bestMovie, year: 2008 },
};
// superHeroCopy.enemies.push('Poison Ivy');
// superHeroCopy.bestMovie.year = 2008;
console.log(superHeroCopy);

console.log(superHero);
