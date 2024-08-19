const accID = 74049
let accEmail = "tushar@google.com"
var accPassword = "12345"
accCity = "Pune"
let accState
// accID = 2 // not allowed in JS
accEmail = "tushar@gmail.com"
accPassword = "234"
accCity = "Delhi"

console.table([accID, accEmail, accPassword, accCity, accState])
// console.table([group of variables you want to show in tabular form])

/*
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.

*/
