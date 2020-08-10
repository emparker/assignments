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
function namesOnly(arr4, callback){
    return callback(arr4)
}

function getName(arr4){
    return arr4[0]
}


console.log(namesOnly([
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
]), getName); 