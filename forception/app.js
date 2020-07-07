var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

var alphabet = "abcdefghijklmnopqrstuvwxyz"
const newAlpha = alphabet.split("")
//console.log(newAlpha)
const result = []

for (let i = 0; i < people.length; i++){
        result.push(people[i] + ": ")
    for (let j = 0; j < newAlpha.length; j++){
        result.push(newAlpha[j])
    }
}
console.log(result)
