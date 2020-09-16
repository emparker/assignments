const readline = require("readline-sync")
console.log("This is Princess In Another Castle")

//gameActive boolean


//create a class for a player
class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = true 
        this.playerStatus = ["Powered Up", "Big", "Small", "Dead"]
    }

// setName function
    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){ //need a for loop?
            this.status = playerStatus
            for (let i = 0; i < playerStatus.length; i++){
                if( playerStatus[i] === "Dead"){
                    return gameActive = false
                        
            }
        }
    }

//gotPowerup function
    gotPowerup(){
            return starActive()
            // if (playerStatus === "PoweredUp"){
            //     return starActive()
            // }
        }

    // starActive(){
    //     this.hasStar = true
    // } 

//addCoin function
    addCoin(){
        this.totalCoins = this.totalCoins++
    }
    
//hasStar is active of type boolean?
    starActive(){
        this.hasStar = true
    }

//print funciton 
    print(){
        let {name, totalCoins, hasStar, playerStatus} = this

        console.log(name, totalCoins, playerStatus[0], hasStar)
    }

        
}


//use class to create object ?!?!?  What object?
const theMarioObject = new Player("Mario", 0, "Small", false)
console.log(theMarioObject)
const theLuigiObject = new Player("Luigi", 0, "Small", false)
console.log(theLuigiObject)
console.log(setName(theMarioObject))
// Create a random range function that returns either 0, 1, or 2.

// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// Then call the print method on the object.

// Now put the random range function inside a setInterval function that ends after gameActive === false




