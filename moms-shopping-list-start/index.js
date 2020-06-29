const form = document.addItem
// console.log(addItem)

form.addEventListener("submit", function(event){
    event.preventDefault()

    let addedItem = form.title.value
    form.title.value = ""

    const li = document.createElement("li")
    li.textContent = addedItem
    document.getElementById("list").append(li)

    let div = document.createElement("div")
    let button = document.createElement("button")  // let or const?
    const xButton = ("X")

    button.append(xButton)
    div.append(button)
    li.append(div)
    //console.log(xButton)


 
    
        function removeItem(e){
            let addedItem = e.target.div
            HTMLFormElement.target = addedItem
            // let div = null
            div.remove(list.div)
    }  
    button.addEventListener("click", removeItem)

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
