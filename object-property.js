const students = [
    {id:23, name:"Arman ali", Roll:232},
    {id:22, name:"Saif Mia", Roll:212},
    { id:29, name:"Karim Bhai", Roll:238},
    { id:24, name:"Kalam Mia", Roll:224}
];

const id = students.map(s=>s.id)
const names = students.map(s=>s.name)
const roll = students.map(s=>s.Roll)
const bigger = students.filter(s => s.Roll>230)

console.log(id)
console.log(names)
console.log(roll)
console.log(bigger)