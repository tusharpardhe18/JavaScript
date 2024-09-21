const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}


for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);      
}

const programming = ["js","rb","py","cpp","java"]

for (const key in programming) {
    // console.log(`Array key ${key} for ${programming[key]}`);   
}

const map = new  Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN',"India")

for (const key in map) {
    // console.log(key);
}

// for Arrays we can use forof loops and forin loops for objects



