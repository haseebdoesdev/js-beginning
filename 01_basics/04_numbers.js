let transmissionRate = 20000 

console.log(transmissionRate)
console.log(transmissionRate.toFixed(2))
console.log(transmissionRate.toPrecision(4))

let numberInString = transmissionRate.toString()
console.log(`let's check the type of numberInString: ${typeof numberInString}\nthe value in numberInString is ${numberInString}`)

console.log(transmissionRate.toLocaleString())

const bandwidth = 23.42433
console.log(Math.round(bandwidth))
console.log(Math.ceil(bandwidth))
console.log(Math.floor(bandwidth))
console.log(Math.sqrt(bandwidth))
console.log(Math.max(bandwidth,transmissionRate,33))
console.log(Math.min(bandwidth,transmissionRate,33))

console.log(Math.PI)

console.log(Math.abs(-1))

let max = 30 
let min = 20

const randomSeed = Math.random()

console.log(Math.floor((randomSeed*(max-min)+ 1) + min) )