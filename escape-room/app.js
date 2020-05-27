



//const buttonHole = document.getElementById("hole")
const buttonKey = document.getElementById("key")
const buttonDoor = document.getElementById("door") 
 


//buttonHole.addEventListener("click", buttonHolePressed)
buttonKey.addEventListener("click", buttonKeyPressed)
buttonDoor.addEventListener("click", buttonDoorPressed)


Function;buttonHolePressed("click", true);{
    document.getElementById("hole").innerHTML = "YOU DONEZO FOO";
}

function buttonKeyPressed(){
    console.log("Congrats, you've escaped!")
}

function buttonDoorPressed(){
    console.log("game over")
}

buttonKeyPressed === true;
//buttonHolePressed === false;
buttonDoorPressed === false;

if (buttonKeyPressed === true){
    console.log("You win!")
} else if (buttonHolePressed){
    console.log("NOOOOOO")
} else if (buttonDoorPressed){
    console.log("The door is locked, game over")
}


















