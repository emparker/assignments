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
    constructor(name, energy, strength){
        this.name = name;
        this.energy = energy;
        this.strength = strength;
        //this.damage = damage;
    }
}

const mountainLion = new Enemy('MOUNTAIN LION', 100, 50, 5);
const elk = new Enemy('ELK', 75, 75, 5);
const bear = new Enemy('BEAR', 50, 100, 5);
const outlaw = new Enemy('Outlaw DUSTY RIFLE', 80, 25, 5);

let enemies = [mountainLion, elk, bear, outlaw];


while( isAlive && !hasWon ){
    const action = readline.keyIn(`Alrighty ${hiker.name} would you like to [h] Hike, [p] print your inventory, [s] check your health status, or [q] Quit?`, {limit: 'hpsq'});
    if (action ==='h'){
        hike();
    } else if (action === 'p'){
        printInventory();
    } else if (action === 's'){
        healthStatus();
    } else if (action === 'q'){
        isAlive = false;
        console.log(`you have QUIT the game`)
    }

}

function healthStatus(){
    hiker.hydration + 1;
    console.log(hiker.health)
}

function printInventory(){
    //const selectItem = readline.keyIn('How about you pick an item ')
    console.log(hiker.inventory)
}
// function win(){
//     if(hasWon === true){
//         console.log(`congrats ${name}, you win!`)
//     }
// }

function hike(){
    const random = Math.floor(Math.random() * 4);
    console.log(random);
    hiker.hydration - 3;
    if (random === 0){
        console.log('There is defintely something out there, be careful...')
        enemyAttack();
        } else if (random === 2){
            hiker.inventory.push(`SCORE! You found a gold coin from Dusty Rifile's fresh loot!`);
            console.log(`Hike On ${hiker.name}`)
        }
}



function enemyAttack(){ 
    let battle = true;
    let random = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[random];
        console.log(`Oh no! ${enemy}!!!!`)
        hiker.health -= 50;
        console.log(`You're Damage Report: ${hiker.health}`)
    while(battle === true){
        let random5 = Math.floor(Math.random() * 5);
            enemy.energy -= 50;
            enemy.strength -= 50;
            hiker.health -= 10 ;
            hiker.health -= 10;
        if(random5 === 0){    
                lostItem = [];
                const lostInventory = hiker.inventory.pop();
                const lost = lostItem.push(lostInventory);
                console.log(`Wow ${name} that was impressive! There has been however the unfortunate loss of an item from your inventory. In the curfulffle you have lost ${lost}`)
            } else if (random5 === 1){
                enemy.strength -= 20;
                enemy.energy -= 20;
            } else if (random5 === 2){
                enemies = [];
                battle = false;
                enemyParished();;
            } else (enemy.strength === 0 && enemy.energy === 0);{
                    battle = false;
                    playerParished();
                }
    }
}

function playerParished(){
    if (hiker.health <= 0 && hiker.hydration <= 0){
            console.log(`Sorry to say it ${hiker}, but ya toast... GAME OVER`)
            isAlive = false;
    } 
}
function enemyParished(){
    if (enemies.strength <= 0 && enemies.energy <= 0){
            console.log(`YOU JUST CLEANED HOUSE! YOU WIN THE GAME ${name}!!`)
            hasWon= true;
    }
}

// const selectItem = realine.keyIn('How about you select an item from your pack! [w] for Water, [p] to use Pepper Spray, [f] for your first aid kit', {limit: 'wpf'})
// if (selectItem === 'w'){
//     hydrate();
// } else if (selectItem === 'p'){
//     usePepperSpray();
// } else if (selectItem === 'f'){
//     replenishHealth();
// }
// hiker.inventory == inventory.pop([2]) ?

// function hydrate(){
//     //?
// }
// function usePepperSpray(){
//     //?
// }
// function replenishHealth(){
//     //?
// }
