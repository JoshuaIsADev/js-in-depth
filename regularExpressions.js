/*

//warmup
const quote = 'What is this? A center for ants?';

const pattern = /center/;

const test = pattern.test(quote);
const match = quote.match(pattern);
console.log(test);
console.log(match);
*/

/*
//excercise 1
const email = 'monkey@trees.com'; //there are better tools online to match, don't use regex for email

const emailPattern = /\w*@\w*\.com$/; //\w matches any character
const test = emailPattern.test(email);
const match = email.match(emailPattern);

console.log(test);
console.log(match);
*/

//excercise2
const phoneNumber = '020-382-6940';

const phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/; // can be +1 020 382 6940
const testPhone = phonePattern.test(phoneNumber);
const matchPhone = phoneNumber.match(phonePattern);

console.log(testPhone);
console.log(matchPhone);
