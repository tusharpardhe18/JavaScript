// const coding = ["js","cpp","ruby","python"]

// const val = coding.forEach( (item) => {

//     console.log(item);
    
//     return item

// } )

// console.log(val);

const nums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = nums.filter( (num) => num > 4 )

// let newNums = nums.filter( (num) => {
//     return num > 4 // if we don't write return here it will print an empty array
// } )

// let newNums = []

// nums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {title: "Book1", author: "Author1", publish: 1981, edition: 2001},
    {title: "Book2", author: "Author2", publish: 1982, edition: 2002},
    {title: "Book3", author: "Author3", publish: 1983, edition: 2003},
    {title: "Book4", author: "Author4", publish: 1984, edition: 2004},
    {title: "Book5", author: "Author5", publish: 1985, edition: 2005},
    {title: "Book6", author: "Author6", publish: 1986, edition: 2006},
    {title: "Book7", author: "Author7", publish: 1987, edition: 2007}
]

let newBooks = books.filter( (book) => book.publish > 1985 )

newBooks = books.filter( (book) => {
    return book.author === "Author1" && book.publish > 1980
})

console.log(newBooks);









