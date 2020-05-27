//alert("Hello World")
console.log("hello world")

//Data Types 
//Strings - anything encapsulated by "double quotes" or 'single quotes'
//Booleans - true or false
//Numbers - anything with numerical value
//Arrays - denoted by [] - great for holding alot of data
//Objects = denoted by {} - great for deatiled item

var employee = "Michael Scott"
console.log(employee)
//Create new Varaibles for each of the datatypes
//Console log it

var dog = "Chocolate Lab"
console.log(dog)


var isTrue = true
console.log(isTrue)


var moochAge = 9
console.log(moochAge)
console.log(moochAge + 9)

var charleysAge = 6
console.log(charleysAge)

var states = ["Connecticut", "North Carolina", "Colorado", "Utah"]
console.log(states)
console.log(states[1])


var pizza = {
    topping: "peperoni",
    size: "large"
}

console.log(pizza)
console.log(pizza.topping)
console.log(pizza.size)

var familyMembers = ["Brent", "Emily", "Charley", "Josie"]
console.log(familyMembers)
console.log(familyMembers[0])
console.log(familyMembers[3])


var house = {
    street: "Home St",
    houseNum: 567,
    isoccupied: true,
    neighbors: ["The Thompsons", "The Richards", "The Romans"],
    owner: {
        name: "Tom",
        hasMortgage: true,
        refrences: ["Microsoft", "Applebees", "Meg's Coffee" ]

    }

}

console.log(house.owner.name)
console.log(house.neighbors[2])
console.log(house["houseNum"])
console.log(house["owner"]["refrences"][1])




//if (this is true){
//    execute this code
//}

if (employee === "Michael Scott") {
    console.log("I am the regional manager of Dunder Mifflin!")
} else if (employee === 'Phyllis') {
    console.log("i do something in accounting")
} else {
    console.log('Youre not allowed')
}


if (moochAge === 9) {
    console.log("That is correct")
} else if (moochAge === 8) {
    console.log("you are close")
} else {
    console.log("try again")
}

if (isTrue === true) {
    console.log("yes")
}

//Create a Variable to work within your Conditional Statemt like employee from above 2-3x
var color = 'Blue'

if (color === "Blue") {
    console.log("the color is Blue")
} else if (color === "Orange") {
    console.log("you're way off")
} else {
    console.log("incorrect")
}

var josiesAge = 3
console.log(josiesAge)

if (josiesAge === 3) {
    console.log("You got it!")
} else if (josiesAge === 4) {
    console.log("that is too old")
} else {
    console.log("NO, Josie is 3!")
}



var husbandsName = "Brent"

if (husbandsName === "Brent") {
    console.log("My husbands name is Brent")
} else if (husbandsName === "Franklin") {
    console.log("His name starts with the letter B")
} else {
    console.log("nope")
}

if (pizza.topping === "peperoni" && pizza.size === "large") {
    console.log(pizza)
} else if (pizza.topping === "cheese" && pizza.size === "small") {
    console.log("small cheese")
}


// for (#1startingPoint; #2endingPoint; #4howWeGetThere) {#3this code will be executed}
// i++ same thing as saying i = i + 1
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i)

for (var i = 10; i < 30; i++) {
    console.log(i)
}


var goodMusic = ["reggea", "funk", "classic rock", "jazz", "alternative"]
    goodMusic.length
    
for (var i = 0; i < goodMusic.length; i++) {
    console.log(goodMusic[i])
}   


var say = 0  
while (say < 5){
    console.log("I can")
    say++
}


var myButton = document.getElementById("test")

myButton.addEventListener("click", buttonworks)

function buttonworks(){
    console.log("This button was clicked")
}


var myButton2 = document.getElementById("test2")

myButton2.addEventListener("dblclick", iworktoo)

function iworktoo(){
    console.log("this button was double clicked!")
}


