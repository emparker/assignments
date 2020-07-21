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

const hiker = new Player(name, 100, 100);

class Enemy{
    constructor(name, energy, strength){
        this.name = name;
        this.energy = energy;
        this.strength = strength;
    }
}

const mountainLion = new Enemy('Mountain Lion', 100, 50);
const elk = new Enemy('Elk', 75, 75);
const bear = new Enemy('Bear', 50, 100);
const outlaw = new Enemy('Outlaw Dusty Rifle', 80, 25);

const enemies = [mountainLion, elk, bear, outlaw];
console.log(enemies)

while( isAlive && !hasWon ){
    const action = readline.keyIn('Alrighty ${hiker} would you like to [h] Hike, [c] check your inventory, or [q] Quit?', {limit: 'hcq'});
    if (action ==='h'){
        hike();
    }else if (action === 'c'){
        checkInventory();
    } else if (action === 'q'){
        isAlive = false;
        console.log('you have QUIT the game')
    }
}

function hike(){
    const random = Math.floor(Math.random() * 4);
    if (random === 0){
        enemyAttack();
        } else {
            console.log('Hike On ${hiker}')
        }
}

function checkInventory(){
    const selectItem = readline.keyIn('How about you pick an item ')
    
    console.log(hiker.inventory)
}

function enemyAttack(){ //CHOOSE RUN OR ATTACK-REFER TO ASSIGNMENT INSTRUCTIONS!
    const random = Math.floor(Math.random() * ememies.length);
    const enemy = enemies[random];
    if(enemy === 0){
        hasWon = true 
        console.log('GAME OVER')
    } else {
        const selectItem = realine.keyIn('How about you select an item from your pack! [w] for Water, [P] to use Pepper Spray, [f] for your first aid kit')
        if (selectItem === 'w'){
            hydrate();
        } else if (selectItem === 'p'){
            usePepperSpray();
        } else if (selectItem === 'f'){
            replenishHealth();
        }
        // hiker.inventory == inventory.pop([2]) ?
        // console.log('WOW, that sure was impressive! Better move along now...')
    }
}

function hydrate(){
    //?
}
function usePepperSpray(){
    //?
}
function replenishHealth(){
    //?
}

function energyStatus(){
    const random = Math.floor(Math.random() * Player.inventory.length);
    const healthPoints = Player.inventory[random];
    if (healthPoints === 0){
        console.log('NOOOOOOOOO!  Sorry you loose')
    } else{

    }
}