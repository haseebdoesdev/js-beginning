function sayMyName(){
    console.log('Hisenberg')
}
const jsUser = {
    name: "Haseeb",
    age: 20,
    location: "Islamabad",
    emial: "abdlhaseeb17@gmail.com",
    isLoggedin: false,
    lastLogin:["Monday", "Saturday"]
}
sayMyName()

function addTwoNumbers(num1, num2){
    return num1+num2
}


console.log(addTwoNumbers(1,2))

function handleUser(userObj){
    console.log("Name: " +userObj.name)
    console.log("Age: " + userObj.age)
    console.log("Email: " + userObj.emial)
    console.log("Last Login: " + userObj.lastLogin)
}

handleUser(jsUser)


function calculateSum(name, ...values){
    console.log("Name of the sum is: " + name)
    let sum = 0

    for (let index = 0; index < values.length; index++) {
        sum = sum+ values[index];
        
    }
    return sum
}

console.log(calculateSum("First Sum", 5,2,42,32,4,24,242,3))


//++++++++++++++++SCOPES+++++++++++++++++++++++++++++++
// This example ilustrates scope. Notice that func2() is called before declareation (it is correct) 
function func1(){
    func2()
    console.log('Outer function')
    function func2(){
        console.log('Inner funcs')
    }
}

func1()

//There are two ways, a fucntion can be declared 

let firstFunc = function() {
    console.log('I am the first function')
}

function secondFunc(){
    console.log('I am the second fucntion')
}