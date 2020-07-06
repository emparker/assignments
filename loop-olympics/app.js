const centerH1 = document.getElementsByTagName("h1")[0]
centerH1.style.textAlign = "center"

//Preliminaries

//Write a for loop that prints to the console the numbers 0 through 9.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i < array.length; i++){
    console.log(array[i])
}

//Write a for loop that prints to the console 9 through 0.

for (i = array.length -1; i >= 0; i--){
    console.log(array[i])
}

//Write a for loop that prints these fruits to the console.

var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//Bronze Medal

//Write a for loop that will push the numbers 0 through 9 to an array.

function printArr(){
const arr = []
arr.push("1", "2", "3", "4", "5", "6", "7", "8", "9")
console.log(arr)
}
printArr()


//Write a for loop that prints to the console only even numbers 0 through 100.

for (i = 0; i <= 100; i++){
    if ([i] % 2 === 0){
        console.log([i])
    }
}


//Write a for loop that will push every other fruit to an array.

var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"] 
function pushEveryOther(){
    let firstFruits = []

    for (let i = 0; i < fruits.length; i = i+2) {
    firstFruits.push(fruits[i]);
    console.log(firstFruits)
    }

}
pushEveryOther()


//Silver Medal

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
    ]
//Write a loop that will print out all the names of the people of the people array
    
    function pushPeople(){
    let people = []
    for (i = 0; i < peopleArray.length; i++){
        people.push(peopleArray[i].name)
        console.log(people)
    }
}
pushPeople()

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// ["Singer", "Entertainer"] // occupations

//function pushPeople(){
function pushPeopleAndOccupation(){
    let peopleArr = []
    for (i = 0; i < peopleArray.length; i++){
        peopleArr.push(peopleArray[i].name)
        console.log(peopleArr)
    }
//}
//pushPeople()

//function pushOccupation(){
    let occupations = []
    for (i = 0; i < peopleArray.length; i++){
        occupations.push(peopleArray[i].occupation)
        console.log(occupations)
    }
}
//pushOccupation()
//}
pushPeopleAndOccupation()

//Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",

function pushEveryOtherName(){
    let names = []

    for (let i = 0; i < peopleArray.length; i = i+2){
    names.push(peopleArray[i].name)
    console.log(names)
    }
}
pushEveryOtherName()


// and every other occupation to another array starting with, in this case, "Singer".
//??
function pushEveryOtherOccu(){
        let occu = []

        for (let i = [1]; i < peopleArray.length; i = i+2){
            occu.push(peopleArray[i].occupation)
            console.log(occu)
        }
}
pushEveryOtherOccu()
//?? i = ? peopleArray.length?
//peopleArray.splice(peopleArray.occpation[1], peopleArray.occupation[3])
//console.log(peopleArray.occupation)


// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:
const nest = [
[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]
]
function myMatrix(){
const myArr = []
for (let i = 0; i < nest.length; i++){
        for (let j = 0; j < nest[i].length; j++){
        myArr.push(nest[i][j])
        } 
    }
}
myMatrix()
