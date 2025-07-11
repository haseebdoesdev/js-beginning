const myArr = [1,2,3,4,5,6,7]

const myarr2 = new Array("Haseeb", "Muneeb","Shahzaib","Ayub","Husnain")
console.log(myarr2)

console.log(myArr.length)
console.log(myArr.join())
console.log(myArr[1])
myArr.push(8)
console.log(`After pushing 8: ${myArr}`)
myArr.pop()
console.log(`After popping: ${myArr}`)
myArr.unshift(0)
console.log(`After unshifting 0: ${myArr}`)
myArr.shift()
console.log(`After shifting: ${myArr}`)

console.log( myarr2 )
console.log(myarr2.slice(2,5))
console.log(myarr2)
console.log(myarr2.splice(1,3))
console.log(myarr2)