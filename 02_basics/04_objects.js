// const tinderUser = new Object()
const tinderUser = {}
console.log(tinderUser)

const ob1 = {1:'a', '2': 'b'}
const ob2= {3:'a', '4': 'b'}

console.log({ob1, ob2}) // not correct
console.log(Object.assign({}, ob1, ob2)) // correct one, can also be written as Object.assign(ob1, ob2) but it make changes to the original object ob1 as the first elements the target
console.log({...ob1, ...ob2}) // more commonly used


const regUser = {
    role: 'Front End Developer',
    fullname: {
        username:{
            firstName: 'Abdul',
            lastName: 'Haseeb'
        }
    }
}
console.log (regUser.fullname.username.lastName)

const unregUsers = [
    {
        id :'1',
        name: 'hayat'
    },
    {
        id :'2',
        name: 'Ali'
    },
    {
        id :'1',
        name: 'Omar'
    }
]

console.log(unregUsers[2].name)

console.log(Object.keys(unregUsers[1]))
console.log(Object.values(unregUsers[1]))
console.log(Object.entries(unregUsers[1]))

 
const course = {
    courseName: "Data Structures and Algorithm",
    courseInstructor: "Tanveer Ahmad",
    creditHours : 3,
}

const {courseName} = course
const {courseInstructor: instructor} = course   

// both of the above can be used, the second one is used if we want to give a custom name.

console.log(courseName)
console.log(instructor)