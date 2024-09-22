// reduce in JS

const nums = [1,2,3,4]

// const sum =nums.reduce( function(accu , current ) {
//     console.log(`accu : ${accu} & current : ${current}`);
//     return accu + current 
// } , 4 )

// const sum = nums.reduce( (accum , current) => accum + current , 0 )

// console.log(sum);
// 10

const shoppingCart = [
    {
        itemName: "Peanut Butter",
        price: 500,
        quantity: 1
    },
    {
        itemName: "Notebook",
        price: 50,
        quantity: 4
    },
    {
        itemName: "Shirtr",
        price: 100,
        quantity: 2
    },
    {
        itemName: "Laptop",
        price: 50000,
        quantity: 1
    }
]

const Totalprice = shoppingCart.reduce( ( acc , item ) => ( acc + item.price ) , 0 )

console.log(Totalprice);

