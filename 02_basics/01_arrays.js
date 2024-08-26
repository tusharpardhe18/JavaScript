// arrays

const arr = [0,1,2,3,4,5]

const actor = ["kabira", "deep", "aysuh", "raj"]

const arr2 = new Array(1,2,3,4)

// console.log(arr[0]);

// console.log(actor[1]);

// console.log(arr2[3]);

// Array methods

arr.push(6)
arr.push(7)
// console.log(arr);
arr.pop()
arr.unshift(9)
// console.log(arr);
arr.shift()
// console.log(arr);


let t = arr.includes(9);

// console.log(t);

// console.log(typeof t);

// console.log(arr.indexOf(3));

// console.log(arr);

let arr3 = arr.join()

// console.log(typeof  arr3);
// console.log(arr3);

console.log("A ", arr ); // A  [0, 1, 2, 3, 4, 5, 6]

let myn1 = arr.slice(1,5);
// slice() is a method that extracts a subset of elements from the array.
console.log(myn1); // [ 1, 2, 3, 4 ]
console.log("B ", arr); // B  [0, 1, 2, 3, 4, 5, 6]

let myn2 = arr.splice(1,5); 
// splice() is a method that adds or removes elements from the array.
console.log(myn2); // [ 1, 2, 3, 4, 5 ]
console.log("c ", arr); // c  [ 0, 6 ]










