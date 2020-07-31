// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

const form = document.getElementById("travelForm")
const submit = document.getElementById("submit")

submit.addEventListener("click", function formAlert(){
    const firstName = form.elements["firstName"].value
    const lastName = form.elements["lastName"].value
    const age = form.elements["age"].value
    const gender = form.elements["gender"].value
    const destination = form.elements["destination"].value
    const dietChoice = []
        for(let i=0; i < form.diet.length; i++){
            if(form.diet[i].checked){
                dietChoice.push(form.diet[i].value)
            }
        }

    alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Destination: ${destination}
    Diet Restrictions: ${dietChoice}
    ENJOY YOUR TRAVELS!`)   
})
