const marvel_heroes = ["Ironman","Thor","Flash"]
const dc_heroes = ["Superman", "Batman","Wonder Woman"]
const misc_heroes = ["Deadpool", "Robinhood"]
// marvel_heroes.push(dc_heroes)'
let combined_arr = marvel_heroes.concat(dc_heroes)
console.log(combined_arr)


const anotherArr = [1,2,3,4,[3,4,5,2],2,[3,4,5,[5]]]
console.log(anotherArr.flat(Infinity))

let val1 = 22
let val2 = 122
let val3 =32

console.log(Array.isArray("Haseeb"))
console.log(Array.from("Haseeb"))
console.log(Array.of(val1, val2,val3))

console.log([...marvel_heroes, ...dc_heroes,...misc_heroes])