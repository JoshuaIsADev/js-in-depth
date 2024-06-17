//excercise 1
/*const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const setsPoints = new Set();
for (point of points) {
  setsPoints.add(point);
}

console.log(setsPoints);
*/

// excercise 2
/*
const points = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const setsPoints = new Set();

for (let i = 0; i < points.length; i++) {
  if (setsPoints.has(points[i])) {
    console.log(points[i]);
    break;
  }
  setsPoints.add(points[i]);
}
*/

//excercise 3
const items = [
  { name: 'banana', quantity: 1, price: 1.95 },
  { name: 'apple', quantity: 1, price: 1.45 },
  { name: 'banana', quantity: 10, price: 0.05 },
  { name: 'candy', quantity: 1, price: 3.5 },
];

// let array = [];

const results = [];
const duplicates = new Set();

for (let i = 0; i < items.length; i++) {
  if (duplicates.has(items[i].name)) {
    continue;
  }
  results.push(items[i]);
  duplicates.add(items[i].name);
}

console.log(results);
