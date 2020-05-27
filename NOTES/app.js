
//PRELIM

if ( 5 > 3 ){

    console.log("is greater than")
}

var animal = 'cat'
console.log(animal.length)

if (animal.length === 3)
console.log("is the length")

if (animal.length === 3){
    console.log("is the length")
} else if (animal.length === "dog"){
    console.log("not the same")}

//BRONZE

 var person = {
    name: "Bobby",
    age: 12
}
console.log(person)

if (person.age <= 18){
    console.log("you are not old enough")
}  
if (person.age >= 18){
    console.log("Bobby is allowed to go to the movie")
}

if (person.name[0] === "B"){
    console.log("you may enter")
} 
if (person.name[0] && person.age >= 18){
    console.log("come on in")
}

// SILVER

// 1 === "1"
// 1 == "1"



if ((1 <= 2) && 2 === 4){
    console.log("yes")
}

//GOLD

var canine = "dog"

if (canine === "dog"){
    console.log("yup")
}

// Hard!?!?
var isLightOn = true

if (isLightOn === true){
    console.log("the light is on")
}

// Also hard!
var up;
var down = "direction"

if (typeof up !== 'undefined'){
    console.log("variable \"up\" is not defined") //wont run beacsue false. it is NOT defined
}

if (typeof down !== 'undefined'){
    console.log("variable\"down\" is defined")
}

//HELP haha
var s = 20

if (s > 12){
    console.log("it is")
}