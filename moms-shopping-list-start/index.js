const form = document.addItem
// console.log(addItem)

form.addEventListener("submit", event => {
    event.preventDefault()

    const addedItem = form.title.value
    form.title.value = ""

    const li = document.createElement("li")
    li.textContent = addedItem
    document.getElementById("list").append(li)

    
    const button = document.createElement("button") 
    const xButton = ("X")
    button.style.display="block"
    button.append(xButton)
    li.append(button)
    
    button.addEventListener("click", () => li.remove())
})

// another attempted method:
   // button = null
    // function removeItem(button, div){
    //     if (button == div){
    //         div.target.removeChild(button)  //!!!!
    //     }   else{
    //         return false
    //     }
        // button.addEventListener("click", removeItem)//why is button undefined?
