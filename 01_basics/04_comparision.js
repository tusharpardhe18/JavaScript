// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 == 3);
// console.log(2 != 3);


console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);

// The reason is that an equality check == and comparisons > < >= work differently.
// Comparions convert null to a number, treating it as 0.
// That's why in line 13 >=0 is true and in line 11 null > 0 is false.

console.log("2" == 2);
console.log("2" === 2);









