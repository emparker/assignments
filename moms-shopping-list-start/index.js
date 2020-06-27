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
    const button = document.createElement("button")
    const xButton = ("X")//(this is only representing the button tag?)

    button.append(xButton)
    div.append(button)
    li.append(div)
    //console.log(xButton)

})