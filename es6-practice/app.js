//Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const

// John is the pet owner, and his name should be stored differently than the other names.

const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


// Task 1
//  Re-write this .map() using an arrow function:

//  Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

//  function mapVegetables(arr) {
//      return arr.map(function(carrot) {
//          return { type: "carrot", name: carrot }
//      })
//  }
//ES6:
function mapVegetables(arr) {
    return arr.map((carrot) =>  { return { type: "carrot", name: carrot } })
}
console.log(mapVegetables(carrots))

// Task 2
//Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }
//ES6:
function filterForFriendly(arr) {
    return arr.filter(person => {return person.friendly})
}
console.log(filterForFriendly(people))

// Task 3
// Re-write the following functions to be arrow functions:
//1.
// function doMathSum(a, b) {
//     return a + b
// }
doMathSum = (a, b) => a + b
console.log(doMathSum(3, 3))
//2.
// var produceProduct = function(a, b) {
//     return a * b
// }
var produceProduct = (a, b) => a * b
console.log(produceProduct(2, 10))

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following: Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100
//Use Template Literals!
function Person(firstName, lastName, age){
    this.jane = firstName;
    this.doe = lastName;
    this.age = age;
}
Person.prototype.printToString = function() {
    console.log(`Hi ${this.jane} ${this.doe}, how does it feel to be ${this.age}?`)
} 

const kat = new Person("kat", "Stark", 40)

kat.printToString()