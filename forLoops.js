for (let i = 10; i <= 100; i += 10) {
  if (i === 50) {
    console.log('halfway!');
  } else if (i === 100) {
    console.log('You made it');
  } else {
    console.log('Checkpoint!', i);
  }
}
console.log('All done!');
