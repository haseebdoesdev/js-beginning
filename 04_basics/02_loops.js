const coding = ["cpp","python","java", "js"]


for (const language of coding) {
    console.log(language)
}

const myMap = new Map()

myMap.set('1','BMW')
myMap.set('2','LV')
myMap.set('3','HG')

for (const [key,val] of myMap) {
    console.log(`${key} :- ${val}`)
}
const myObj = {
    name: 'Haseeb',
    age:13
}
for (const key in myObj) {
    console.log(`${key}:-${myObj[key]}`)
}
coding.forEach((item)=>(console.log(item + " language")))


function printMe(item){
    console.log(item)
}

coding.forEach(printMe)


const myCoding = [
    {
        language : 'javascript',
        extension: 'js'
    },
    {
        language : 'python',
        extension: 'py'
    },
    {
        language : 'java',
        extension: 'java'
    },
    {
        language : 'typescript',
        extension: 'ts'
    }
]

myCoding.forEach((item)=>{
    console.log(item.extension)
})

coding.forEach((item, ind, arr) => console.log(item,ind,arr))