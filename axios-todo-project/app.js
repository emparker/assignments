//console.log(axios)  

//get todos from API
function getData() {
    axios.get("https://api.vschool.io/emily/todo")
        .then(response => toDoData(response.data))
        .catch(err => console.log(err))
}

getData() //can be anywhere

const toDoList = document.getElementById('todo-list')

//List TODOs to the DOM
function toDoData(data) {
    clearDiv()

    for (let i = 0; i < data.length; i++) {
        createToDo(data[i])
    }
}


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
    divBox.style.width = "500px"

    setDeleteEvent(todoItem._id, deleteButton, divBox)
    boxCheck(todoItem._id, checkBox, h1)
}

function clearDiv() {
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild)
    }
}

const toDoForm = document["todo-form"]

//form for post request

toDoForm.addEventListener("submit", e => {
    e.preventDefault()
    //console.log(e) STUDY with or with out and the difference
    const toDoObj = {
        description: toDoForm.description.value,
        price: toDoForm.price.value,
        title: toDoForm.title.value,
        imgUrl: toDoForm.image.value
    }
    
    // clear input values
    toDoForm.description.value = "" 
    toDoForm.price.value = ""
    toDoForm.title.value = ""
    toDoForm.image.value = ""
    
    //console.log(toDoObj)
    
    axios.post("https://api.vschool.io/emily/todo", toDoObj)
    .then(response => {createToDo(response.data)
    console.log(response.data)})//this add it to API
    .catch(error => console.log(error))
        
    
})


function boxCheck(id, cbutton, h1){
    //console.log(cbutton.checked)
    cbutton.addEventListener('click', () => {
        h1.classList.toggle("strikethrough")//try to toggle class! element.classList.toggle(“classname”)
        
        let obj = {}
        
        if(cbutton.checked === true){
            obj.completed = true
        } else{cbutton.checked === false}
            
        
        
        axios.put("https://api.vschool.io/emily/todo/" + id, obj)     
            .then(response => console.log(response))
            .catch(error => console.log(error))
        

    })
}

//make this a function

function setDeleteEvent(id, dbutton, divBox){
    dbutton.addEventListener("click", () => {

    axios.delete("https://api.vschool.io/emily/todo/" + id)
        .then(response => console.log(response))
        .catch(error => console.log(error))


        divBox.remove()
})}

