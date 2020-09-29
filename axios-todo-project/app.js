//console.log(axios)  

//get todos from API
function getData(){
    axios.get("https://api.vschool.io/emily/todo")
    .then(result => toDoData(result.data))
    .catch(err => console.log(err))
}

const toDoList = document.getElementById('todo-list')

//List TODOs to the DOM
function toDoData(data){
    for(let i = 0; i < data.length; i++){

        // const container = document.createElement('div')
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        const img = document.createElement('img')
        img.className = 'img-container'
        img.style.backgroundImage = data[i].imgUrl
        p.textContent = data[i].description
        h1.textContent = data[i].title
        const urls = data[i].imgUrl
        console.log(urls)
        

        toDoList.appendChild(h1)
        toDoList.appendChild(p)
        toDoList.appendChild(img)
        // container.appendChild(toDoList)
        //console.log(data[i])
    }
}

getData()



//form for post request
const todoForm = document["todo-form"]
