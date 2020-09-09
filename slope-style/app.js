//GREEN 1. Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "farfegnutan")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 2. Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit: `${fruit}`, 
        sweets: `${sweets}`, 
        vegetables: `${vegetables}`
        
}
//HELP- added the fruit = ["apple", "pear"]etc
}
console.log(combineFruit(["apple", "pear"],
            ["cake", "pie"],
            ["carrit"]))
//=> {
    // fruit: ["apple", "pear"],
    // sweets: ["cake", "pie"],
    // vegetables: ["carrit"]
    // }

//3. Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({location, duration}){
return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(vacation))

//4. Use destructuring to make this code ES6:
// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }
function returnFirst(items){
    const [firstItem] = items/*changed this line to be es6*/
    return firstItem
}
console.log(returnFirst(["dog", "cat", "mouse"]))

//5. Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [ firstFav, secondFav, thirdFav ] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities)) 

//BLUE 6. Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...allAnimals) {  
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals, ...allAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals()); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//BLACK DIMOND! 7.  Try to make the following function more ES6xy:
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
// }

const product = { 
    calcProduct(...letters){
        return this.multiply(...letters)
        }, 
        multiply(acc, letter){
            return acc * letter
        }
    }

console.log(product)
        //??

//8. same, make ES6xy:
// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
// }
function unshift(array, ...rest) {  
    return [...rest, ...array];
}

//DOUBLE BLACK! 9. Write some destructuring code to help this function out. Use object literals to simplify it:
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
// [
//   {firstName: "Frank", lastName: "Peterson"},
//   {firstName: "Suzy", lastName: "Degual"},
//   {firstName: "Liza", lastName: "Jones"},
// ]