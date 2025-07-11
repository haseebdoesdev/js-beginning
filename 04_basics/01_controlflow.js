const MTU = 1400 

if (MTU> 1500){
    console.log('MTU is out of range')
}else if(MTU> 1000){
    console.log('Just rightS')
}else{
    console.log('MTU iws out of range')
}

const noOfDev = 3 

switch (noOfDev) {
    case 1:
        console.log('Too less of devices')
        break;
    case 2:
        console.log('Too less of devices')
        break
    case 3: 
        console.log('Just right')
        break
    default:
        console.log('Hell nooooooooo')
        break;
}
if(noOfDev == '3') (console.log('voila'))


//truthy and falsy vals 

const wo_jo = "na aane waala ha nai"

if(wo_jo){
    console.log('Us se mjh ko matlab thaa')
}
else{
    console.log('lmaoooo');
}

const bandwidth = 0

if (!bandwidth){
    console.log('Anne walon se kya matlab')
}

let age

//?? operator
console.log(age ?? 18 )

//ternay operator

const bandwidht = 2001

bandwidht>2000 ? console.log('Aate hain aate honge'): console.log("LMAOOOOOO")