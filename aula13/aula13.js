//               01234567
let umaString = 'Um texto';

console.log(umaString[4]);
console.log(umaString.charAt(3));
console.log(umaString.concat(' em um lindo dia!'));
console.log(umaString + ' em um lindo dia!');
console.log(`${umaString} em um lindo dia!`);
console.log(umaString.indexOf('Um'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'Outra'));
console.log(umaString.length);
console.log(umaString.slice(3, 7));
console.log(umaString.slice(-3));
console.log(umaString.split(' '));
console.log(umaString.split('t'));
console.log(umaString.split('t', 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());