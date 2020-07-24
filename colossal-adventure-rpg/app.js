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
    hiker.hydration + 5;
    console.log(`Your health: ${hiker.health}%`)
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
    //console.log(random);
    hiker.hydration - 5;
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
    // let battle = true;
    // while(battle){ 
    const bailOrFight = readline.keyIn(`This could get ugly, wannna [b]bail or stay and [f]fight?`, {limit: 'bf'});
    if (bailOrFight === 'b'){
        bail();
        //battle = false;
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
    console.log(`Oh no! ${badGuy}!!!!`)
    let random5 = Math.floor(Math.random() * 5);
    if (random5 === 0){
        youWin();
        // theyWin();
    } else if(random5 === 1){    
        lostItem = [];
        const lostInventory = hiker.inventory.pop();
        const lost = lostItem.push(lostInventory);
        console.log(`You just barely escaped, well done! However there seems to have been an unfortunate loss to your inventory. 
        Looks like in the curfulffle you lost ${lost}`)
    } else if (random5 === 2){
        theyWin();
    } 
}


function gains(){
    let gainsRandom = Math.floor(Math.random() * 2);
    if (gainsRandom === 0){
        hiker.inventory.push('Sling Shot')
    //console.log(wepon)
    } else if (gainsRandom === 1){
        hiker.inventory.push('Hiking Stick')
    }
}

function playerDamageReport(){
    hiker.health -= 10 ;
    hiker.hydration -= 10;
    console.log(`You're Damage Report: 
        Health: ${hiker.health}
        Hydration: ${hiker.hydration}`)
            
}

function enemyDamageReport(){  // NOT QUITE WORKING, ALSO IS IN RIGHT PLACE?
    enemies.energy -= 50;
    enemies.strength -= 50;
    console.log(`${enemies} Damage Report: 
            Energy: ${enemies.energy}
            Strength: ${enemies.strength}`)
}


function theyWin(){
    if (hiker.health <= 0 && hiker.hydration <= 0){
            console.log(`Sorry to say it ${hiker}, but ya toast... GAME OVER`)
            isAlive = false;
    } else {
        playerDamageRerport();
        enemyDamageReport();
    }
    return action
}
function youWin(){
    if (enemies.strength <= 0 && enemies.energy <= 0){
            console.log(`You survived the Wild West, CONGRATULATIONS ${hiker}!`)
            hasWon= true;
    } else {
        playerDamageReport();
        enemyDamageReport()
    }
    return action
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

