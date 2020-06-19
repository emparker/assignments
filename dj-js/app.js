// The square's color will change as follows:

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
button.addEventListener('mousedown', function () {
    button.style.backgroundColor = 'red';
});

// Yellow when the mouse button is let go over the square
button.addEventListener('mouseup', function () {
    button.style.backgroundColor = 'yellow';
});


// //  Orange when the mouse scroll is used somewhere in the window (not just over the square).
document.body.addEventListener('wheel', function () {
    document.body.style.backgroundColor = 'orange';
});


// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red"
// which	
// Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event


document.body.addEventListener("keypress", function(){
    // const char = event.which || event.keyCode;
    // if (keypress.key == 114);
    button.style.backroundColor = "red"
}) 