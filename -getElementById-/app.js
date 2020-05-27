

document.getElementById("original").innerHTML = "Is this right?!"

var wow = document.getElementById("original")
    console.log(wow)


document.getElementById("tryTwo").innerHTML = "here I am"

var testTwo = document.getElementById("tryTwo")
    console.log(testTwo)



var myButton = document.getElementById("button1")


myButton.addEventListener("click", buttonClicked)

function buttonClicked(){
    console.log("the button was clicked")
    console.log("more text")
    var num = 5*50
    console.log(num)

}


var mySecondButt = document.getElementById("button2")

mySecondButt.addEventListener("dblclick", doingthings)

function doingthings(){
    console.log("its been double clicked")
    console.log("hello")
    document.getElementById("original").innerHTML= "how about now?"

}

var paragraphOne = document.getElementById("par1")

paragraphOne.addEventListener("click", watchmespin)

function watchmespin(){
    console.log("here I am")
}