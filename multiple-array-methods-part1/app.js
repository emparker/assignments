// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML <li> element.
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }

]

function putInLi(arg){
    const newArr = []
    arg.forEach(function(element){
        const li = document.createElement("li")
        li.textContent = `"${element.firstName} ${element.lastName} is ${element.age}"`
        const appended = document.querySelector("body").append(li)
        return newArr.push(appended)
    })
    
}

function sortedByAge(arg){
    return arg.filter(num => num.age > 18)
}

function alphabetically(arg){
    return arg.sort((a, b) => a.lastName.localeCompare(b.lastName))
}

function mainFunc(arr){
    let results = 
    sortedByAge(arr)
    alphabetically(arr)
    putInLi(arr)
    //stringConcat(arr)
    return results
}

// function stringConcat(arg){
//     return arg.reduce(function(final, element){
//         return final += element
//     }, `"<li>${arg}</li>"`)
// }

// function stringConcat(arg){
//     return arg.forEach(function(element){
//         return element
//     }, "<li> </li>")
// }

console.log(mainFunc(peopleArray));


// Output: 
// [ 
//     "<li>Kyle Mooney is 27</li>",
//     "<li>Sarah Palin is 47</li>",
//     "<li>Rick Sanchez is 78</li>",
//     "<li>Morty Smith is 29</li>",
//     "<li>Lev Tolstoy is 82</li>" 
// ]