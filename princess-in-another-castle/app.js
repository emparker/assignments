const readline = require("readline-sync")
console.log("This is Princess In Another Castle")

let gameActive = true

class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    playerStatus = ["Powered Up", "Big", "Small", "Dead"]
    

    starActive = () => this.hasStar = true

    setName(namePicked){
        this.name = namePicked //??
    }

    gotHit = () => { //need a for loop?
        this.status = playerStatus
        // for (let i = 0; i < playerStatus.length; i++){
        //     if( playerStatus[i] === "Powered Up"){
        //         return gotPowerUp()
        //     } if ( playerStatus[i] === "Big"){
                    //?
        //          } if ( playerStatus[i] === "Small"){
                        //?
        //              } if ( playerStatus === "Dead"){
                        //return gameActive = false
        //                  }
        
    gotPowerup = () => {
        return starActive()
        // if (playerStatus === "PoweredUp"){
        //     return starActive()
        // }
    }
}








}