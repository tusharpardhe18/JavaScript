/* 

Primitive Datatypes
7 types:
string
number
boolean
null
undefined
symbol
BigInt

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol
const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id === id2);

const bigNumber = 2385640141658014n

/*

Reference (Non-Primitive)
Array
Objects
Functions

*/
//Arrays
const heroes = ["shaktiman", "ironman", "spiderman", "hulk", "thor"]

//Objects
let myObj = {
    name: "tu5hhar",
    age: 21,
}
//Functions
const myFunction = function(){
    console.log( "Hello, World!");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
/*

Type of Val => Result

null => object
undefined => undefined
number => number
string => string
boolean => boolean
symbol => symbol

*/

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)
// gets a copy of data, gets a reference of data
/*

let myYoutubeName = "tushardotcom"

let name = myYoutubeName
name = "chaiaurcode"

console.log(name);
console.log(myYoutubeName);

*/

//In this, we get a copy of data
let userOne = {
    email: "user@gmail.com",
    upi: "user@sbi"
}

//in this, we get refrenece of data
let userTwo = userOne

//accessing email of userOne using userTwo
userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

