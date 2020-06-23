const animals = ["dog", "cat", "mouse"]
const list = document.getElementById("list")

const li = document.createElement("li")
li.textContent = animals[0]
list.appendChild(li)

const liTwo = document.createElement("li")
liTwo.textContent = animals[1]
list.appendChild(liTwo)

const liThree = document.createElement("li")
liThree.textContent = animals[2]
list.appendChild(liThree)