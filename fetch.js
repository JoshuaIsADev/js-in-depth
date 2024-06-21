import fetch from 'node-fetch';
import fs from 'fs/promises';

/*
const response = fetch('https://www.wallhaven.cc');

// response
//   .then((result) => {
//     // for (const key in result) {
//     //   console.log(key);
//     // }
//     // console.log(result.__proto__);
//     // console.log(result.__proto__.__proto__);
//     // console.log(result.url);
//     // console.log(result.status);
//     // console.log(result.ok);
//     // console.log(result.headers);
//     // console.log(result.text());
//     // const text = result.text();
//     // text.then((html) => {
//     //   console.log(html);
//     // });
//     return result.text();
//   })
//   .then((html) => {
//     console.log(html);
//   });

const fetchData = async () => {
  const result = await fetch('https://www.wallhaven.cc');
  const html = await result.text();
  console.log(html);
};

fetchData();
*/

/*
//warm up
// const fetchData = async () => {
//   const result = await fetch('https://www.craigslist.org/about');
//   const html = await result.text();
//   console.log(html);
// };
// fetchData();

fetch('https://www.craigslist.org/about')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    console.log(html);
  });
*/

/*
//excercise 1
const fetchData = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await result.json(result);
  console.log(json);
};

fetchData();
*/

/*
//excercise 2
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((result) => {
    // console.log(typeof result);
    return result.json();
  })
  .then((object) => {
    console.log(object.sprites.other['official-artwork'].front_default);
  });
*/

//excercise 3
// const fetchData = async () => {
//   const result = await fetch(
//     'https://w.wallhaven.cc/full/2y/wallhaven-2yxp16.jpg'
//   );
//   const blob = await result.blob();
//   const objectUrl = await URL.createObjectURL(blob);
//   Image.src = objectUrl;
//   console.log(Image.src);
// };

// fetchData();

fetch('https://w.wallhaven.cc/full/2y/wallhaven-2yxp16.jpg')
  .then((response) => {
    return response.arrayBuffer();
  })
  .then((image) => {
    fs.writeFile('wallpaper.jpg', Buffer.from(image));
  });
