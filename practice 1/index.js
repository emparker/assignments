console.log("hello")

// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// Examples:
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function missingNum(arrTest) {
    const baseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arrTest.sort(function(a, b){return a-b})
    for (let i = 0; i <= baseArr.length; i++){
        if (baseArr[i] !== arrTest[i]) {
            return baseArr[i]
        }
    }
}
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))

function missingNumTake2(arr) {
    const target = 55
    
    missingNumArrTotal = arr.reduce((a, b) => a + b, 0)
    
    return target - missingNumArrTotal 
    
}
// console.log(missingNumTake2([7, 2, 3, 6, 5, 9, 1, 4, 8])) //10



