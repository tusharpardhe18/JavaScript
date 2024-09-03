// singleton 
//Object.create

//object literals

const mySym = Symbol("key1")

const  JsUser = {
    name: 'John',
    "full name": "Tushar Pardhe",
    [mySym]: "mykey1",
    age: 30,
    location: "India",
    email: "john@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);    // john@google.com
// console.log(JsUser["email"]); // john@google.com
// console.log(JsUser.email[1]); // o
// console.log(JsUser["full name"]); //Tushar Pardhe
// console.log(typeof JsUser[mySym]); // key1, it's a string

// JsUser.email = "tushar@gmail.com"
JsUser.name = "Tushar"
// Object.freeze(JsUser)
// Freeze -> Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

// JsUser.email = "rohit@gmail.com"

// console.log(JsUser);
// output
// {
//     name: 'John',
//     'full name': 'Tushar Pardhe',
//     age: 30,
//     location: 'India',
//     email: 'tushar@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
// }

// TypeError: Cannot assign to read only property 'email' of object '#<Object>'

JsUser.greeting = function(){
    console.log("Hello JS user");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello HTML user, ${this["full name"]}`);   
    // output
    // Hello HTML user, Tushar Pardhe
    // undefined
}
console.log(JsUser.greeting());
//output
// Hello JS user
// undefined

// console.log(JsUser.greeting); // undefined

console.log(JsUser.greetingTwo());

