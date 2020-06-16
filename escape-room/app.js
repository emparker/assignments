// Tell the user their options:

// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.

// JavaScript tools that may help
// while loop
// variables
// booleans
// if/else if/else OR switch statement
// readline-sync (syntax for installing and using below)
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
    console.log(`hi ${name}! Welcome to the ESCAPE ROOM.`);

let gamePlayOn = true
let hasKey = false

while(gamePlayOn === true){
    
    const usersPick = ["Put your hand in the hole", "Find the key", "Open the door"];
    const index = readline.keyInSelect(usersPick, `OK ${name}, you must pick one of these three options, what will you choose?`);
        
    switch (usersPick[index]){
    
    case "Put your hand in the hole": 
        console.log("NOOO you fool! GAME OVER") 
        gamePlayOn = false
        return; 
    case "Find the key": 
        hasKey = true
        console.log("Congrats, you found the key and can now unlock the door! You're almost there! Pick one more option")
        console.log(hasKey)
        break;
    case "Open the door": 
    
    if (hasKey === false){
        console.log(hasKey)
        console.log("First you must find the key to unlock the door.")
        break;
    } else {
        console.log("CONGRATS you've escaped!")
        console.log(hasKey)
        return
        
    } 
        break;
    default:
        console.log("Please pick the option 1, 2 or 3")
        } 
        //return
    }
    


    


// console.log(`Wow, ${name} what a game, well done. Please play again soon!`);
// if (key === true){
//     console.log("You win!")
// } else if (hole === false){
//     console.log("NOOOOOO")
// } else if (door){
//     console.log("The door is locked, game over")
// }


















