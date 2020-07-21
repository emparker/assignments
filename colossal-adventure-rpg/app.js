const readline = require('readline-sync')

let isAlive = true;
let hasWon = false;

const name = readline.question('Hey there and welcome to the Wild Wild West Trailhead! Would you be so kind as to give us your name? ');

class Player{
    constructor(name, hydration, health){
        this.name = name;
        this.hydration = hydration;
        this.health = health;
        this.inventory = ['Water', 'Pepper Spray', 'First Aid Kit'];
    }
}

const hiker = new Player(`${name}`, 100, 100);


class Enemy{
    constructor(name, energy, strength, damage){
        this.name = name;
        this.energy = energy;
        this.strength = strength;
        this.damage = damage;
    }
}

const mountainLion = new Enemy('Mountain Lion', 100, 50, 5);
const elk = new Enemy('Elk', 75, 75, 5);
const bear = new Enemy('Bear', 50, 100, 5);
const outlaw = new Enemy('Outlaw Dusty Rifle', 80, 25, 5);

const enemies = [mountainLion, elk, bear, outlaw];


while( isAlive && !hasWon ){
    const action = readline.keyIn(`Alrighty ${hiker.name} would you like to [h] Hike, [c] check your inventory, [s] check your status, or [q] Quit?`, {limit: 'hscq'});
    if (action ==='h'){
        hike();
    } else if (action === 'c'){
        checkInventory();
    } else if (action === 's'){
        healthStatus()
    } else if (action === 'q'){
        isAlive = false;
        console.log(`you have QUIT the game`)
    }

}

function win(){
    if(hasWon === true){
        console.log(`congrats ${name}, you win!`)
    }
}

function hike(){
    const random = Math.floor(Math.random() * 4);
    console.log(random)
    hiker.hydration--
    if (random === 0){
        enemyAttack();
        } else if (random === 2){
            hiker.inventory.push(`you found Dusty Rifile's fresh loot`)
            console.log(`Hike On ${hiker.name}`)
        }
}

function checkInventory(){
    //const selectItem = readline.keyIn('How about you pick an item ')
    console.log(hiker.inventory)
}

function enemyAttack(){ 
    let battle = true
    const random = Math.floor(Math.random() * enemies.length);
    
    const enemy = enemies[random];
    console.log(enemy)
    // we use the while loop to create the ability to have a fight that can have multiple attcks until an enemy dies
    while(battle === true){
        const random6 = Math.floor(Math.random() * 6);
        // here is where the 'fighting' will take place as in the hiker losing health and the enemy losing strength and energy
        if(random6 === 6){
            // where you need to write code to pop out an item from the hikers inventory array

        } else if (random6 === 1){
            // the area you write code for STRONG attack
            // might need to change the way the damage is being handled (syntax)
            hiker.health -= enemy.damage
            enemy.strength -= 20
            enemy.energy -= 20
        } else if (random6 === 2){

        }

        // this check to see if the enemy is dead, and then finishes the battle by changing the battle variable to false and ending the while loop
        if(enemy.strength === 0 && enemy.energy === 0){
            battle = false
        }
    }

        hasWon = true 
        console.log('YOU WIN!')
        // const selectItem = realine.keyIn('How about you select an item from your pack! [w] for Water, [p] to use Pepper Spray, [f] for your first aid kit', {limit: 'wpf'})
        // if (selectItem === 'w'){
        //     hydrate();
        // } else if (selectItem === 'p'){
        //     usePepperSpray();
        // } else if (selectItem === 'f'){
        //     replenishHealth();
        // }
        // hiker.inventory == inventory.pop([2]) ?
        // 
    }


// function hydrate(){
//     //?
// }
// function usePepperSpray(){
//     //?
// }
// function replenishHealth(){
//     //?
// }

function healthStatus(){

    console.log(hiker)


    //const random = Math.floor(Math.random() * Player.inventory.length);
    //const healthPoints = Player.inventory[random];
    /* if (healthPoints === 0){
        console.log('NOOOOOOOOO!  Sorry you loose')
    } else{

    } */
}