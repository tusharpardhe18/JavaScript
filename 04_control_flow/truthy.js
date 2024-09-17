const userEmail = []

// if (userEmail) {
//     console.log("Got user email.");
// } else{
//     console.log("don't have user email.");
// }

// flasy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values
// all remaining are truthy values like
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 14

console.log(val1);

// Terinary operator

// condition ? true : false /

const iceteaProce = 100
iceteaProce <= 80 ? console.log("less than 80") : console.log("more than 80");
;













