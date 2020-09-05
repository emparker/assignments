// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "farfegnutan")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit: `${fruit}`, 
        sweets: `${sweets}`, 
        vegetables: `${vegetables}`
}
//HELP
}
console.log(combineFruit(["apple", "pear"],
            ["cake", "pie"],
            ["carrit"]))
//=> {
    // fruit: ["apple", "pear"],
    // sweets: ["cake", "pie"],
    // vegetables: ["carrit"]
    // }

//Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({location, duration}){
return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(vacation))

//Use destructuring to make this code ES6:
// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}