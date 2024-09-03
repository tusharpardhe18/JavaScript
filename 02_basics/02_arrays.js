const marvel = ["thor", "ironman", "spiderman"]
const dc = ["flash", "batman", "superman"]

// marvel.push(dc)
// after pushing dc into marvel 
// console.log(marvel);     // [ 'thor', 'ironman', 'spiderman', [ 'flash', 'batman', 'superman' ] ]

// console.log(marvel[1][2]);  // o
// console.log(marvel[3][2]);  // batman

// console.log(marvel.concat(dc));  // [ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]


let all = [...marvel, ...dc] // spread operator [...]
// console.log(all);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr2 = arr.flat(Infinity)

// console.log(arr2); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// console.log(Array.isArray("Hitesh")); //false
// console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})); //interesting topic // [] <- output


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
