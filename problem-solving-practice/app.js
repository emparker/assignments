//Write a function that takes an array of numbers and returns the largest (without using Math.max())

//largest([3, 5, 2, 8, 1]) // => 8

// function largest(number){
//     for (let i = 1; i < arr.length; i++){
//         const arr = number.split("").map(largest);
//         const highNumber = arr[0];
//             if (arr[i] > highNumber){
//             highNumber = arr[i];
//             }
//     }
//     return highNumber;
// }
// console.log(largest([3, 5, 2, 8, 1]))
// function largest(arr){
//     arr = []
//     for (let i = 0; i < arr.length; i++){
//         const numbers = arr[i].toString();
//         numbers.map(Number);
//         const highNumber = arr[0];
//             if (numbers < highNumber){
//                 arr.push(numbers)
//             }

//     }
//     return highNumber
// }
// console.log(largest([3, 5, 2, 8, 1]))
// function largest(arr){
//     const highNumber = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > highNumber){
//             return highNumber;
//         }
//     }
//     //return highNumber;
// }
//console.log(largest([3, 5, 2, 8, 1]))

//*
// Write a function that takes an array of words and a character and returns 
// each word that has that character present.

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

function lettersWithStrings( anArray, aString ){
    const result = []
    for (let i = 0; i < anArray.length; i++){
        if (anArray[i].includes(aString)){
        result.push(anArray[i])
        }
    }
    return result
}
const newVar = lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")
console.log(newVar)
//*

