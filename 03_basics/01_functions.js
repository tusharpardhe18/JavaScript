
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");   
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("tushar");
    
}

const result = addTwoNumbers(3,5)
// console.log("Result : ", result);

function loginUserMessage(username = "sam"){
    if (username === undefined) {
        console.log("Please enter a username");
        return    
    }
    return `${username} just Logged In !!!`
}
// console.log(loginUserMessage("Tush"));
// empty -> undefined
// "" -> nothing prints
// "Tushar" -> Tushar



function calculationCartPrice(val1, val2, ...num1){ // ... -> rest operator
    return num1
}

// console.log(calculationCartPrice(200, 400, 600, 500, 700));
//output -> [ 600, 500, 700 ]

const user = { 
    name: "Tushar",
    price: "999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     name: "tush",
//     price: "799"
// })


const newArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
