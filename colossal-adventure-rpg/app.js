const readline = require('readline-sync')

let isAlive = true;
let hasWon = false;

const name = readline.question('Hey there and welcome to the Wild Wild West Trailhead! Would you be so kind as to give us your name? ');

class Player{
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.inventory = ['Water', 'Energy Bar', 'First Aid Kit'];
    }
}

const hiker = new Player(name, 100, 100);

class Enemy{
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
}

const mountainLion = new Enemy('Mountain Lion', 100, 50);
const elk = new Enemy('Elk', 75, 75);
const bear = new Enemy('Bear', 50, 100);
const outlaw = new Enemy('Outlaw Dusty Rifle', 80, 25);

const enemies = [mountainLion, elk, bear, outlaw];

while( isAlive && !hasWon ){
    const action = readline.keyIn('would you like to [h] Walk, [p] Print your inventory, or [q] Quit?', {limit: 'hqp'});
    if (action ==='h'){
        hike();
    }else if (action === 'p'){
        printInventory();
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
            console.log('Hike On')
        }
}

function printInventory(){
    console.log(hiker.inventory)
}

function enemyAttack(){
    const random = Math.floor(Math.random() * ememies.length);
    const enemy = enemies[random];
    if(enemy === 0){
        hasWon = true || hiker.inventory.pop(inventory[2])  //?? possible??
        console.log('GAME OVER')
    } else {
        console.log('WOW ${hiker.name}, that sure was impressive! Better move along now...')
    }
}

function healthStatus(){
    const random = Math.floor(Math.random() * Player.inventory.length);
    const healthPoints = Player.inventory[random];
    if (healthPoints === 0){
        console.log('NOOOOOOOOO!  You loose')
    } else{

    }
}