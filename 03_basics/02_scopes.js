// let c = 300 // global scope
let a = 300

if (true) {   // block scope
    let a = 10
    const b = 20
    //var c = 30
    c = 30    
    // console.log("INNER: ", a);
    //output 10
       
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);  // output 300
// console.log(b);
// console.log(c);



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    // two()
}

one()

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {

        const website = " youtube"

        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ********************** Interesting topic ******************



// if we just declare the fucntion i like this then we can access the fucntion from anywhere like we can write the addOne(5) above it and execute it
function addOne(num){
    return num + 1;
}

addOne(5)


// if we deckare the function inside a variable then we can't access the fucntion from anywhere, we have to call it after the declaration only or else it will give you error
const addTwo = function(num){
    return num + 2;
}

addTwo(4)