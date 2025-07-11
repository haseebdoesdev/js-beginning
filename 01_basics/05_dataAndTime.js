let myDate = new Date() 

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

let myCreatedDate = new Date(2001,1,1)
let myCreatedDate1 = new Date(2001,1,1,2,5)
let myCreatedDate2 = new Date("2004-11-20")
let myCreatedDate3 = new Date("11-20-2004")


console.log(myCreatedDate.toString())

let timestamp = Date.now()

console.log(timestamp)
console.log(myCreatedDate.getTime())


console.log(myDate.toLocaleString('default',{
    weekday : 'long',
    era:'long'
}))