const myNums = [1,2,3,4,5,6,7,8,9]


const greaterThan5 = myNums.filter((i)=> i>5)

console.log(greaterThan5)


const myNums2 = myNums.map((item)=> { return item*10}) // this is correct 
const MyNums3 = myNums.map((item)=> item*10+1)// this is correct as well

console.log(myNums2)
console.log(MyNums3)

//chaining
const myNums4 = myNums.map((i)=>i*7).map((i)=>i+1).filter((i)=>i%2==1)

console.log(myNums4)


let total = myNums.reduce((acc, currval)=>acc+currval,0)
console.log(total)

// we can use this syntax as well

total = myNums4.reduce(function(acc, currval){
    return acc+currval
},0)

console.log(total)
