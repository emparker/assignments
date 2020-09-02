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

// runForLoop(["cat", "dog"])


// Task 1
//  Re-write this .map() using an arrow function:

//  Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.
//  const carrots = ["bright orange", "ripe", "rotten"]
// const carrots = ["bright orange", "ripe", "rotten"]

//  function mapVegetables(arr) {
//      return arr.map(function(carrot) {
//          return { type: "carrot", name: carrot }
//      })
//  }
const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

function mapVegetables(arr) {
    return arr.map((carrot) =>  { return { type: "carrot", name: carrot } })
}

console.log(mapVegetables(carrots))