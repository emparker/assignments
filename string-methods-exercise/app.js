/*Make a function that will return any given string into all caps followed by the same string all lowercase.

capilizeAndLowercase("Hello") // => "HELLOhello" */

const string = "hello"
//string1Length = string.length

const upperCasedString = string.toUpperCase()
console.log(upperCasedString + string)

/* Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// findMiddleIndex("Hello") // => 2
// // findMiddleIndex("Hello World") // => 5 */
const string2 = "hello world"
//const string2Length = string.length


// console.log(middle1)
// const middle2 = string2[Math.floor((string2Length -1) /2)]
// console.log(middle2)

// result1 = middle1.indexOf(string1Length)
// console.log(result1)

// result2 = middle2.indexOf(string2Length)
// console.log(result2)

function findMiddleIndex(string, string2){
    
        for (let i = 0; i < string.length; i++){
            string[Math.floor(string[i] -1) /2]
        }
        for (let j = 0; j < string2.length; j++){
            string2[Math.floor(string2[j] -1) /2]
        }
}   
findMiddleIndex()










//var middle = arr[Math.floor((arr.length - 1) / 2)];
// function findMiddleIndex(){

//     for (let i = 0; i < string.length; i++){
//             console.log(Math.floor(string[i]))

//string[i].indexOf(middleString)
        //for (let j = 0; j < string2.length; j++){
//const middleString2 = string2[Math.floor(string2.length[j])]
//console.log(middleString2)
//string2[j].indexOf(middleString2)
    //     }
    // }
    //return middleString.indexOf(string[i])

//console.log(findMiddleIndex)