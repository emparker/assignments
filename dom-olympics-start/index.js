//Qualifier
const header = document.getElementById("header")
const headerText = header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize = "40px"

const span = document.createElement("span")
const emily = document.createTextNode ("Emily")
span.appendChild(emily)
span.style.color = "brown"
span.style.fontSize = "15px"

const pTag = document.createElement("p")
pTag.appendChild(span)

const newText = document.createTextNode(" wrote the JavaScript")
pTag.appendChild(newText)
header.appendChild(pTag)
pTag.style.fontSize = "15px"

//BRONZE
const messages = document.getElementsByClassName("messages")[0]

const messageLeft = document.getElementsByClassName("message left")[0]
const messageLeftNew = messageLeft.textContent = ("I have something incredible to tell you")

const messageRight = document.getElementsByClassName("message right")[0]
const messageRightNew = messageRight.textContent = ("Oh yea?! Tell me!")

const messageLeftII = document.getElementsByClassName("message left")[1]
const messageLeftIINew = messageLeftII.textContent = ("I've won the lottery! I've got MILLIONS now.")

const messageRightII = document.getElementsByClassName("message right")[1]
messageRightII.textContent = ("That is incredible! May I have some?!")

//part 2 BRONZE
const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", event =>{
    messages.innerHTML = "<h1> hey </h1>"
})

//SILVER
// const themeOne = document.getElementsByTagName("theme-one")
// themeOne.style.backgroundColor = "blue"

// const themeTwo = document.getElementsByTagName("theme-two")
// themeTwo.style.backgroundColor = "red"

// const themeDropDown = document.getElementById("theme-drop-down").value
// console.log(themeDropDown.length)

// function changeColor(){
//     for (let i = 0; i < themeDropDown.length; i++){
//             console.log(event)
//         if (themeDropDown[i] === themeDropDown[0]){
//                 console.log('blue')
//                 event.target.value.style.backgroundColor = "blue"
//                 // document.getElementsByClassName('left')
//         } else if(themeDropDown[i] === themDropDown[1]){
//                 console.log('red')
//                 event.target.value.style.backgroundColor = "red"
//             }
//         }
//     }

// themeDropDown[0].addEventListener("click", changeColor) 
// themeDropDown[1].addEventListener("click", changeColor)
document.getElementById("theme-drop-down").change = function(){
    alert(this.value)
}
