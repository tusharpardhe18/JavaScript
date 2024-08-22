const name = "Tushar"
const repo = 11

// console.log(name + repo + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repo} `);


const gameName = new String('tushar-pardhe yaar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));


// const newString = gameName.substring(2, 6) 
// console.log(newString); //it prints tusha

// const newString2 = gameName.slice(2, 4)
// console.log(newString2); //it prints tushar

const newString3 = gameName.trim()
console.log(newString3);

const url = "https://tushar.com/tushar%20pardhe"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

const words = gameName.split(' ');
console.log(words[1]);

const chars = gameName.split('');
console.log(chars[5]);

console.log(gameName.split('-'));




