//Dates

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let mynewdate = new Date(2023, 8 , 27, 4, 2, 1);
// let mynewdate = new Date("2023-01-12");
// let mynewdate = new Date("25-01-2024");

// console.log(mynewdate.toLocaleString())

// let TimeStamp = Date.now()
// console.log(TimeStamp)
// console.log(mynewdate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

// `${newDate.getMonth()} and the time is ${newDate.getTime()}`

let weekDay = newDate.toLocaleString('default', {weekday : "short"});
// long => Monday
// short => Mon
// narrow => M

console.log(weekDay);









