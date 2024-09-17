// if
const isUserLogged = true
const temperature = 51 

// if (isUserLogged) {
//     console.log(`You can login to the system`); 
// }
// if (2 != 3) {
//     console.log(`execute`); 
// }
// if (temperature < 50) {
//     console.log(`Less than 50 C`); 
// }else{
//     console.log(`temperature greater than 50 C`);
// }

// console.log(`EXECUTE`);

// <, >, <=, >=, ==, !=, ===, !== 
// === is used to check the type of the variable as well as the value

// const score = 200
// if (score > 100) {
//     var power = "fly"
//     console.log(`user power: ${power}`);   
// }

// console.log(`user power: ${power}`);

// const balance = 1000
// if (balance > 500) console.log(`Yes`); //, console.log('no');

// if (balance < 500) {
//     console.log(`less than 500`);
// }    
// else if(balance < 750){
//     console.log(`less than 750`);
// }
// else if(balance < 900){
//     console.log(`less than 900`);
// }else{
//     console.log(`less than 1200`);
// }

const UserLogged = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLogged && debitCard) {
    console.log(`Allowed to buy courses`);
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log(`User logged in`);
}