const bools = [true, true, false, true, false, false];
const result = bools.map((bool) => {
  if (bool === true) {
    return Math.floor(Math.random() * 100);
  } else {
    return 0;
  }
});

console.log(result);
