// both are same in writing
const tinderUser = new Object()
// const tinderUser1 = {}

tinderUser.id = "itsTushar"
tinderUser.name = "Tushar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// output 
// { id: 'itsTushar', name: 'Tushar', isLoggedIn: false }
// console.log(tinderUser1);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// console.log(tinderUser.propertyIsEnumerable('isLoggedIn'));



const bumble = {
    email: "tushar@gmail.com",
    fullname: {
        userFullName: {
            firstname: "tushar",
            lastname: "pardhe"
        } 
    }
}

// console.log(bumble.fullname.userFullName.firstname);
// output
// tushar


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);
// output
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
// output
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}
// console.log( obj3 );
// output
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        name: "Tushar",
        age: 25,
        email: "tushar@gmail.com"
    },
    {
        id: 2,
        name: "Tush",
        age: 21,
        email: "tush@gmail.com"
    },
    {
        id: 3,
        name: "Tu",
        age: 20,
        email: "tur@gmail.com"
    }
]

// console.log(users[0].age);



