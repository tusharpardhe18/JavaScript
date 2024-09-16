// Immediately Invoked Function Expressions IIFE

function chai() {
    console.log(`DB Connected`);
    
}
chai();

( () => {
    console.log(`DB Connnected TWO`);
    
} )();


// global scopes ke pollution se problem hoti hai isliye
// toh uss global scope ke jo variables(declarations) hai unhe
// hatane ke liye humne iife ka use kiya

( (name) => {
    console.log(`DB Connnected TWO ${name}`);
    
} )(`Tushar`);