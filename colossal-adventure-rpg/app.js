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
    }
}

const mountainLion = new Enemy('MOUNTAIN LION', 100, 50);
const elk = new Enemy('ELK', 75, 75);
const bear = new Enemy('BEAR', 50, 100);
const outlaw = new Enemy('Outlaw DUSTY RIFLE', 80, 25);

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
    hiker.hydration + 5;
    console.log(`Your health: ${hiker.health}%`)
}

function printInventory(){
    console.log(hiker.inventory)
}

function hike(){
    const random = Math.floor(Math.random() * 4);
    //console.log(random);
    hiker.hydration -= 10;
    if (random === 0){
        hiker.inventory.push(`SCORE! You found a gold coin from Dusty Rifile's fresh loot!`);
        console.log(`Hike On ${hiker.name}`)
    } else if (random === 1){
        hiker.inventory.push(`YUM! Snacks!`);
        gains()
    }else if (random === 2){
        console.log('There is defintely something out there, be careful...')
        enemyAttack();
    }
}



function enemyAttack(){ 
    // attackOn = true;
    // attackOff = false;
    //while (!attackOff && attackOn){
    const bailOrFight = readline.keyIn(`This could get ugly, wannna [b]bail or stay and [f]fight?`, {limit: 'bf'});
        if (bailOrFight === 'b'){
        bail();
        //attackOff = true;
        } else if (bailOrFight === 'f'){
        fight();
        } 
    } 
//}

function bail(){
    console.log(`Samrt move, ${hiker.name}. Check your Inventory ;)`)
    gains()
}


function fight(){
    let random = Math.floor(Math.random() * enemies.length);
    let badGuy = enemies[random]; //BAD GUY UNDEFINED OR {OBJECT, OBJECT}
    console.log(`Oh no! ${badGuy.name}!!!!`);
    //console.log(badGuyIsAlive(badGuy), playerIsAlive())
    while(badGuyIsAlive(badGuy) && playerIsAlive()){
        // console.log(badGuy);
        // console.log(hiker)
        badGuy.energy += Math.ceil(Math.random() *20);
        badGuy.strength += Math.ceil(Math.random() *20);
        hiker.hydration -= Math.ceil(Math.random() *50);
        hiker.health -= Math.ceil(Math.random() *50);
        playerDamageReport();
        enemyDamageReport(badGuy);
        theyWin();
        badGuy.energy -= Math.ceil(Math.random() *50);
        badGuy.strength -= Math.ceil(Math.random() *50);
        hiker.hydration += Math.ceil(Math.random() *30);
        hiker.health += Math.ceil(Math.random() *30);
        playerDamageReport();
        enemyDamageReport(badGuy);
        youWin(badGuy);
        
    }

}  
    // choose a bad guy
    // fight loop => while both the fighter and emeny are alive
    //    each loop the player takes a random amount of damage and so does the bad guy
    // if then calling either theyWin or youWin

    
    
            

    


function gains(){
    let gainsRandom = Math.floor(Math.random() * 2);
    if (gainsRandom === 0){
        hiker.inventory.push('Sling Shot')
    } else if (gainsRandom === 1){
        hiker.inventory.push('Hiking Stick')
    }
}

function playerIsAlive(){
    return hiker.health > 0 && hiker.hydration > 0
}

function badGuyIsAlive(enemy){
   // console.log(enemy)
    return enemy.strength > 0 && enemy.energy > 0
    
}

function playerDamageReport(){
    console.log(`You're Damage Report: 
        Health: ${hiker.health}
        Hydration: ${hiker.hydration}`)
        
}

function enemyDamageReport(enemy){  
    console.log(`${enemy.name} Damage Report: 
            Energy: ${enemy.energy}
            Strength: ${enemy.strength}`)
            
}


function theyWin(){
    if (hiker.health <= 0 || hiker.hydration <= 0){
            console.log(`Sorry to say it ${hiker.name}, but ya toast... GAME OVER`)
            isAlive = false;
    } else {
        playerDamageReport(); 
        //enemyDamageReport();
    }
    
}
function youWin(enemy){
    if (enemy.strength <= 0 || enemy.energy <= 0){
            console.log(`You survived the Wild West, CONGRATULATIONS ${hiker.name}!`)
            hasWon= true;
    } else {
        playerDamageReport();
        enemyDamageReport(enemy)
    }

}

// function playerWins(){
//     console.log(`You survived the Wild West, CONGRATULATIONS ${hiker}!`);
//     hasWon = true 
// }

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

