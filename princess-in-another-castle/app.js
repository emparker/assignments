console.log("This is Princess In Another Castle") 

//create a class for a player
class Player{
    constructor(totalCoins = 0, name = "Mario", status = "Small", hasStar = false){
        this.name = name
        this.totalCoins = totalCoins
        this.hasStar = hasStar
        this.gameActive = true 
        this.playerStatus = status
    }

// setName function
    setName(namePicked){
        this.name = namePicked
    }
//set gotHit funciton
    gotHit(){
        if (mario.hasStar === true){
            console.log("You lost your star ** sad face **")
            mario.hasStar = false
        }
        if (this.playerStatus === "power up"){
            console.log("you got hit and made you BIG")
            this.playerStatus = "big"
        } if (this.playerStatus === "big"){
            console.log("doh you got hit and now SMALL")
            this.playerStatus = "small"
        } if (this.playerStatus === "small"){
            this.playerStatus = "dead"
            
            console.log("Game Over")
            
            this.gameActive = false 
            
        }
    }
    
//gotPowerup function
    gotPowerup(){
            if (this.playerStatus === "PowerUp"){
                starActive()
                console.log("You got s STAR! Woop woop")
            } if (this.playerStatus === "big"){
                this.status = "power up"
                console.log("A POWER UP! Now you are POWERED UP")
            } else (this.playerStatus === "small")
            this.playerStatus = "big"
            console.log("A POWER UP! Now you are BIG")
    }

//addCoin function
    addCoin(){
        this.totalCoins++
    }
    
//hasStar is active of type boolean?
    starActive(){
        this.hasStar = true
    }

//print funciton 
    print(){
        let {name, totalCoins, playerStatus} = this

        if (playerStatus === "dead"){
            console.log(`Name: ${name} \n Final Coin Count: ${totalCoins} \n Well played ${name} Come back soon!`)
        } else
        console.log(`Name: ${name} \n Coins: ${totalCoins} \n Status: ${playerStatus} \n You have a STAR`)
    }
}     

//use class to create object 
const mario = new Player()
mario.setName("Mario")

// Create a random range function that returns either 0, 1, or 2.
function randomNumber() {
    return Math.floor(Math.random() * 3)
}

// Now put the random range function inside a setInterval function
// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function
//dont forget to clear interval!
let gameOn = setInterval(function(){
    if(mario.gameActive == true){
        if(randomNumber() === 0){
            mario.gotHit()
        } if(randomNumber() === 1){
            mario.gotPowerup()
        } else if(randomNumber() === 2){
            mario.addCoin()
        }
        // Then call the print method on the object.
        mario.print()
    } else 
        clearInterval(gameOn)
    
},3000)
















