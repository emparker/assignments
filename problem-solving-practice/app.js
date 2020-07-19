//*
//Write a function that takes an array of numbers and returns the largest (without using Math.max())
//largest() // => 8

function largest(arr){
    const largestNum = []; // if [] logs 1 if [0] logs 2??? AND WHY VAR?!
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            if (arr[i][j] > largestNum[i]){
                largestNum[i] = arr[i][j];
            }
        }
    }
    return largestNum.push(largestNum[i]);
}
const showMe8 = largest([3, 5, 2, 8, 1])
console.log(showMe8)

//*
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
//*
// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

function isDivisable( num1, num2){
    if (num1 % num2 == 0){
        return true;
        } else {
            return false
    }
}
const answer1 = isDivisable(4, 2)
console.log(answer1)
const answer2 = isDivisable(9, 3)
console.log(answer2)
const answer3 = isDivisable(15, 4)
console.log(answer3)
//*