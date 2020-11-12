var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const arr= []
const theBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//% 26  use the modulelous to capter the remainder so it can cirlcle back around the string?  tip from fellow student
// console.log(theBet)

//use the input variable and the shift variable to decode.  duh
//users input needs to change the chosen words letters, to the shifted letter per a specified number of characters using theBet array as a guide, then display encoded word array/string?
const specialChar = ' \\\' "(){}!@#$%^&*()1234567890-_=+|":;<>,.?/~`'

shiftedText = () => {
    for (let i = 0; i < input.length; i++){
        
        if (specialChar.includes(input[i])){
            arr.push(input[i])
            continue
            //place is an index!!
            // console.log(place)
        }
        const place = theBet.indexOf(input[i]) + shift
            if (place <= theBet.length ){
                arr.push(theBet[place])
                
            } else if (place >= theBet.length){
                arr.push(theBet[place - 26])
            
            }
        }
        console.log(arr)
        
    // return the final string
    // return arr.join("")  could have made this simpler... 
    return arr.reduce((finalString, currentLetter) => {
        return finalString = `${finalString}${currentLetter}`
    }, "")
    

}
console.log(arr)
console.log(shiftedText())
// console.log("the input", input)
// console.log("the shift", shift)

//test for the indexOf on theBet string
// const theE = theBet.indexOf("e")
// console.log("the e", theE)


// reduce method
// arr.reduce(callbackFn, initalizedValue, index)
// arr.reduce()

// ['d', 'g', 'f']
// finalString = ''

// 1st iteration 
// currentLetter = 'd'
// finalString= finalString+currentLetter
// finalString= ''+'d'
// finalString='d'

// // 2nd iteration
// currentLetter = 'g'
// finalString = finalString+currentLetter
// finalString = 'd'+'g'
// finalString = 'dg'

// //3rd iteration 
// currentLetter = 'f'
// finalString = finalString+currentLetter
// finalString = 'dg' + 'f'
// finalString = 'dgf'

// final String: 'dgf'