// try {
//   const message = 'hello there';
//   console.log(message);
//   throw new Error('boom!');
// } catch (error) {
//   console.error(error);
//   console.error('caught');
// }

// console.log('hi?');

try {
  const user = {
    name: 'Alex',
    age: 21,
    // profile: {
    //   color: 'blue',
    // },
  };
  console.log(user.profile.color);
} catch (error) {
  console.error(error);
}
