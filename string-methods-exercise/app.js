/*Make a function that will return any given string into all caps followed by the same string all lowercase.

capilizeAndLowercase("Hello") // => "HELLOhello" */

const string = "hello"
const string2 = "hello world"
const llo = string.slice(2)
const world = string2.slice(6)
console.log(world)
console.log(llo)
const upperCasedString = string.toUpperCase()
console.log(upperCasedString + string)

/* Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5 */

function findMiddleIndex(){
    let middle1 = Math.floor(string.length / 2)
    console.log(middle1)
    let middle2 = Math.floor(string2.length / 2)
    console.log(middle2)
}   
findMiddleIndex()

//Make a function that uses slice() and the other functions you've written to return the first half of the string

//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf(){
    let result1 = string.slice(0, 2)
    console.log(result1)
    let result2 = string2.slice(0, 5)
    console.log(result2)
    
    const lastChallenge = result1.toUpperCase()
    console.log(lastChallenge)
    
    const lastChallenge2 = result2.toUpperCase()
    console.log(lastChallenge2)

    const final = lastChallenge + llo
    console.log(final)
    const final2 = lastChallenge2 + world
    console.log(final2)
}
returnFirstHalf()



// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

// hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

///////////////////////////////////////////////////////////////////////////////

//PROTOTYPES & PROTOTYPAL INHERITANCE 

/*function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.numLegs = 4;
    this.hasTail = true;
}

Cat.prototype.speak = function () {
    console.log("Meow! My name is " + this.name);
};

Cat.prototype.nap = function () {
    console.log("Prrrrrr.");
};

function NyanCat(name, popTartFlavor) {
    Cat.call(this, name);
    this.breed = "Nyan";
    this.popTartFlavor = popTartFlavor;
}

NyanCat.prototype = Object.create(Cat.prototype);
NyanCat.prototype.constructor = NyanCat;

NyanCat.prototype.speak = function () {
    console.log("Meow meow meowmeow meowmeowmeow");
};


var nyan = new NyanCat("Bub", "Strawberry");
console.log(nyan.breed);  // "Nyan"
console.log(nyan.popTartFlavor);  // "Strawberry
console.log(nyan.numLegs);  // 4
nyan.speak();  // "Meow meow meowmeow meowmeowmeow" */
