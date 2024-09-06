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

const course = {
    coursename: "js in hindi",
    price: '999',
    courseInstructor: "Tushar"
}

// console.log(course.courseInstructor);

// de- structuring data from courseInstructor -> instructor
const {courseInstructor: instructor} = course // extracted data

// console.log(instructor);

// const navbar = ({company}) => {
// }
// navbar(company = "google")

// ************************** API & JSON ****************************
// {
//     "name": "John",
//     "coursename": "js",
//     "price": "free"
// }

// [
//     {
//         "name": "Tushar",
//         "coursename": "js",
//         "price": "free"
//     },
//     {
//         "name": "Aman",
//         "coursename": "c++",
//         "price": "free"
//     },
//     {
//         "name": "Rohen",
//         "coursename": "c",
//         "price": "free"
//     }
// ]

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }