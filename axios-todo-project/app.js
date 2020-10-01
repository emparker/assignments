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

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    const input = document.createElement('input')
    const deleteButton = document.createElement('button')
    img.setAttribute("src", todoItem.imgUrl)
    img.setAttribute("height", "100px")
    img.setAttribute("width", "100px")
    input.setAttribute("type", "checkbox")
    deleteButton.textContent = "DELETE"
    p.textContent = todoItem.description
    p2.textContent = todoItem.price
    h1.textContent = todoItem.title

    toDoList.appendChild(h1)
    toDoList.appendChild(p)
    toDoList.appendChild(p2)
    toDoList.appendChild(img)
    toDoList.appendChild(input)
    toDoList.appendChild(deleteButton)
    plaything = toDoList
}

//?
// toDoForm.input.addEventListener('checked', () => {
//     if (input.checked == false) {
//         input.checked = true
//         const strike = document.createElement('s')
//         toDoForm.title.setAttribute(strike, "true")

//     } else {
//         if (input.checked == true) {
//             input.checked = false
//         }
//     }
// })


function clearDiv() {
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild)
    }
}



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
    
    //for (let attr of Object.keys(toDoForm)) {
    //toDoForm[attr].value = ""
    //} - thing shane wrote

    toDoObj.description.value = "" // need a value for the obj created
    toDoObj.price.value = ""
    toDoObj.title.value = ""
    toDoObj.image.value = ""

    console.log(toDoObj)

    axios.post("https://api.vschool.io/emily/todo", toDoObj)
        .then(response => console.log("success")) // is this right?
        .catch(error => console.log(error))
})

// function deleteItem(toDoObj) {
//     toDoForm.deleteButton.addEventListener("button", e => {
//         e.preventDefault()

//         axios.delete("https://api.vschool.io/emily/todo", toDoObj._id)
//             .then(response => console.log(response))
//             .catch(error => console.log(error))
//     })
// }