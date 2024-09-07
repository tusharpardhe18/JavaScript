// let c = 300 // global scope
let a = 300

if (true) {   // block scope
    let a = 10
    const b = 20
    //var c = 30
    c = 30    
    console.log("INNER: ", a);
    //output 10
       
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a);  // output 300
// console.log(b);
// console.log(c);
