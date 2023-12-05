const numbers =[2,23,3,34,232,34]
const output = []
for(let i=0; i<numbers.length; i++){
    const elment = numbers[i]
    const result = elment * elment
    output.push(result)
}
console.log(output)


const numbers1 =[2,23,3,34,15,18]

function square(elment){
    return elment * elment;
}
const square = x => x * x
numbers.map(function(elment, index, array){
    console.log(elment, index, array)
})


const result = numbers.map(x => x * x)

console.log(result)


const bigger = numbers.filter(x => x>15)

console.log(bigger)
