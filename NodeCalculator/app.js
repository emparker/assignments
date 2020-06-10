const readline = require("readline-sync");

const userName = readline.question("May I have your name? ");

// console.log('Hi ' + userName + ' !' + 'Welcome to ')

console.log(`Hi ${userName}! Welcome to Emily's Node Caluclator`);

const num1 = readline.question("Please enter first number: ");

const num2 = readline.question("Please enter second number: ");

const operations = ["Addition", "Subtraction", "Multiplication", "Division"];

const index = readline.keyInSelect(operations,"Which operation would you like to perform?");


function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
   return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}
// for (let i = 1; i <= operations.length; i++){
//     if (i == operations[0])
// }
let result = 0
switch (operations[index]) {
    
  case "Addition": add()
    break;
  case "Subtraction": subtract()
    break;
  case "Multiplication": multiply()
    break;
   case "Division": divide()
    break;
  default:
    console.log ("sorry you can't do that")
}

// console.log(`Sweet, your answer is ${result}. Great job!`);