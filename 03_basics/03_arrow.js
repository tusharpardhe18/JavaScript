const user = {
    username: "hitesh",
    price: "999",

    welcomeMsg: function(){
        console.log(`Hi ${this.username}, welcome to the application`);
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);    // undefined
// }

// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

//  ********* ARROW FUNCTION ***********

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// basic function 
// const addtwo =  (num1, num2) => {
//     return num1 + num2
// }

//implicit function
// const addtwo =  (num1, num2) => num1 + num2

const addtwo =  (num1, num2) => (num1 + num2)

console.log(addtwo(3,4));
