const coding = ["js","cpp","ruby","python"]

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item);
} )


function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
} )

const mycode = [
    {
        name: "javascript",
        file: "js"
    },
    {
        name: "java",
        file: "j"
    },
    {
        name: "python",
        file: "py"
    }
]
console.log("Name :- File");

mycode.forEach( (item) => {
    console.log(item.name, ':-', item.file); 
       
} )





