// Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    return arr.map(function(number){
        return number * 2;
    })
    
}

console.log(doubleNumbers([2, 5, 100])); 

// OR

const numbers2 = [2, 5, 100]
numbers2.forEach(function(number, i){
    return numbers2[i] = number * 2
})

console.log(numbers2); 


// Take an array of numbers and make them strings

function stringItUp(arr2){
    return arr2.map(function(eachNum){
        return "" + eachNum + ""
    })
}

  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// Capitalize each of an array of names

// function capitalizeNames(arr3){
//     return arr3.map(function(capitalize){
//         if (capitalize.charAt(0) == capitalize.toLowerCase()){
//             return capitalize.charAt(0).toUpperCase
//         }
//         if (capitalize.slice(1) == capitalize.toUppercse()){
//             return capitalize(1).toLowercase
//         }

//     })
// }

//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//   Make an array of strings of the names

const namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
    
    const names = namesOnly.map(user => user.name)
    console.log(names)

    // Make an array of strings of the names saying whether or not they can go to The Matrix

    const ages = namesOnly.map(function(userAge){
        if (userAge.age >= 18){
            return `${userAge.name} is ${userAge.age} and can go to the Matrix `
        } else {
            return `${userAge.name} is ${userAge.age} and NOT old enough to go to the Matrix `
        }
    })
    console.log(ages)

    // Make an array of the names in h1s, and the ages in h2s
    
    const readyToPutInTheDOM = namesOnly.map(function(arr){
        return `<h1>${arr.name}</h1><h2>${arr.age}</h2>`
    })
    console.log(readyToPutInTheDOM)
