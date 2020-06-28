const form = document.addItem
// console.log(addItem)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const addedItem = form.title.value
    form.title.value = ""

    const li = document.createElement("li")
    li.textContent = addedItem
    document.getElementById("list").append(li)

    const div = document.createElement("div")
    let button = document.createElement("button")
    const xButton = ("X")

    button.append(xButton)
    div.append(button)
    li.append(div)
    //console.log(xButton)
    // button = null


function removeItem(){
    document.addedItem.div.innerHTML = ""  // remove? //innerHTML<-??
}

document.button.addEventListener("click", removeItem)//why is button undefined?

})
// maybe if statement?
