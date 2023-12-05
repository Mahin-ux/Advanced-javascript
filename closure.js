function stopTimer(){
    let countTimer = 0
    return function(){
        countTimer++;
        return countTimer
    }
}
const clock1 = stopTimer()
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())


const clock2 = stopTimer()
console.log(clock2())
console.log(clock2())
console.log(clock1())
console.log(clock1())
