// The square's color will change as follows:


// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red"


// const button = document.getElementById("button")


const button = document.getElementById("box")
// Green when the mouse is double clicked in the square
button.addEventListener("dblclick", doubleClick)
function doubleClick(){
    button.style.backgroundColor = "green"
    console.log ("yes")
}

// Blue when the mouse hovers over the square
button.addEventListener("mouseover", mouseOver);
button.addEventListener("mouseout", mouseOut);
function mouseOver(){
    button.style.backgroundColor = "blue";
    console.log("yo")
}
function mouseOut(){
    button.style.backgroundColor = "white";
    console.log("hey")
}

// Red when the mouse button is held down over the square
button.addEventListener("mousedown", event)
    if (event.button == 1){
        button.style.backgroundColor = "red";
        console.log("???")
    }
// Yellow when the mouse button is let go over the square
button.addEventListener("mouseup", event)
    if (event.button == 1){
        button.style.backgroundColor = "yellow";
        console.log("come on!")
    }

// //  Orange when the mouse scroll is used somewhere in the window (not just over the square).
// document.body.addEventListener("mousewheel", mouseScroll);
// function mouseScroll(){
//     document.body.style.backgroundcolor = "orange";
//     console.log("howdy")
// }
