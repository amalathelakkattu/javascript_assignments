console.log("start")

console.log("Even numbers")
let val = getEvenNumber(11)

function getEvenNumber(num) {
    for (let i = 0; i < num; i++) {
        r = i % 2
        if (r == 0) {
            console.log(i)
        }
    }
}