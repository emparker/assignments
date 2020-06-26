const form = document.addItem
// console.log(addItem)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const addedItem = form.title.value
    form.title.value = ""

    const p = document.createElement("p")
    p.textContent = addedItem
    document.getElementById("list").append(p)
})

