const points = [55, 56, 57, 58, 59, 60];
const sum = points.reduce((result, point) => {
  return result + point;
}, 0);

console.log(points);
console.log(sum);

const companies = ['apple', 'tesla', 'spacex', 'amazon', 'meta', 'google'];
const modded = companies.reduce((result, company) => {
  if (company[0] !== 'a') {
    return result + company + '-';
  } else {
    return result;
  }
}, '');

console.log(modded);
