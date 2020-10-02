//console.log(axios)  

//get todos from API
function getData() {
    axios.get("https://api.vschool.io/emily/todo")
        .then(response => toDoData(response.data))
        .catch(err => console.log(err))
}

const toDoList = document.getElementById('todo-list')

//List TODOs to the DOM
function toDoData(data) {
    clearDiv()

    for (let i = 0; i < data.length; i++) {
        createToDo(data[i])
    }
}

getData() //whhhyyyy here????

function createToDo(todoItem) {

    const divBox = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')
    img.setAttribute("src", todoItem.imgUrl)
    img.setAttribute("height", "100px")
    img.setAttribute("width", "100px")
    checkBox.setAttribute("type", "checkbox")
    deleteButton.textContent = "DELETE"
    p.textContent = todoItem.description
    p2.textContent = todoItem.price
    h1.textContent = todoItem.title

    toDoList.appendChild(divBox)
    divBox.appendChild(h1)
    divBox.appendChild(p)
    divBox.appendChild(p2)
    divBox.appendChild(img)
    divBox.appendChild(checkBox)
    divBox.appendChild(deleteButton)
    
    divBox.style.border = "double"
    divBox.style.borderWidth = "5px"
    divBox.style.padding = "20px"
    divBox.style.margin = "25px 75px 25px"

}

function clearDiv() {
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild)
    }
}



// toDoForm.checkBox.addEventListener('click', () => {
//     toDoForm.h1.style.textDecoration = "line-through"
//     axios.put(`https://api.vschool.io/emily/todo/`) //need id!

// })

//form for post request
const toDoForm = document["todo-form"]

toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    const toDoObj = {
        description: toDoForm.description.value,
        price: toDoForm.price.value,
        title: toDoForm.title.value,
        imgUrl: toDoForm.image.value
    }


    // toDoObj.description.value = "" // how to clear inputs?
    // toDoObj.price.value = ""
    // toDoObj.title.value = ""
    // toDoObj.image.value = ""

    //console.log(toDoObj)

    axios.post("https://api.vschool.io/emily/todo", toDoObj)
        .then(response => createToDo(response.data))//need to snag _id from this?!
        .catch(error => console.log(error))
    
        //grab _id

        Object.keys(toDoObj).forEach((toDoItem) => {
            console.log(toDoItem)
            console.log(toDoObj[toDoItem])
        })
})

// function deleteItem(toDoObj) {
//     toDoForm.deleteButton.addEventListener("button", e => {
//         e.preventDefault()

//         axios.delete("https://api.vschool.io/emily/todo", toDoObj._id)
//             .then(response => console.log(response))
//             .catch(error => console.log(error))
//     })
// }