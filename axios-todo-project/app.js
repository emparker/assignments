//console.log(axios)  

//get todos from API
function getData(){
    axios.get("https://api.vschool.io/emily/todo")
    .then(response => toDoData(response.data))
    .catch(err => console.log(err))
}

const toDoList = document.getElementById('todo-list')

//List TODOs to the DOM
function toDoData(data){
    for(let i = 0; i < data.length; i++){
        createToDo(data[i])
    }
}

function createToDo(todoItem){

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    const input = document.createElement('input')
    img.setAttribute("src", todoItem.imgUrl)
    img.setAttribute("height", "100px")
    img.setAttribute("width", "100px")
    input.setAttribute("type", "checkbox")
    // checked?
    p.textContent = todoItem.description
    p2.textContent = todoItem.price
    h1.textContent = todoItem.title
    
    toDoList.appendChild(h1)
    toDoList.appendChild(p)
    toDoList.appendChild(p2)
    toDoList.appendChild(img)
    toDoList.appendChild(input)
    
}

const toDoForm = document["todo-form"] 

toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    const toDoObj = {
        description : toDoForm.description.value,
        price : toDoForm.price.value,
        title : toDoForm.title.value,
        imgUrl : toDoForm.image.value
    }

    console.log(toDoObj)
    axios.post("https://api.vschool.io/emily/todo", toDoObj)
        .then(response => console.log("success"))
        .catch(error => console.log(error))


})


getData()



//form for post request
const todoForm = document["todo-form"]
