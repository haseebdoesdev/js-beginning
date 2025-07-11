const mySym =  Symbol('key1')
const jsUser = {
    name: "Haseeb",
    [mySym] : 'key1',
    age: 20,
    location: "Islamabad",
    emial: "abdlhaseeb17@gmail.com",
    isLoggedin: false,
    lastLogin:["Monday", "Saturday"]
}
console.log(jsUser.name)
console.log(jsUser['name'])
console.log(jsUser[mySym])
jsUser.age = 21

jsUser.greeting = function(){
    console.log(`Hello! My name is ${this.name}` )
}

console.log(jsUser)

jsUser.greeting()

Object.freeze(jsUser)

jsUser.name ='Muneeb'
console.log(jsUser)