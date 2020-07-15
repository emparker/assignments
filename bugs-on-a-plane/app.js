var form = document.getElementById('arline-form');   //null??
var submit = document.getElementById('submit');
var query = document.querySelector;

function formAlert() {
    var firstName = form.getElementsByClassName("firstName").value;  //just had 'elements["name"].value
    var lastName = form.getElementsByClassName("lastName").value;       //form is null??
    var age = form.getElementsByClassName("age").value;
    var gender = form.getElementsByClassName("gender").value;
    var location = form.getElementsByClassName("travel-location").value;
    var diet = {};
    if (form.getElementsByClassName('vegan').checked) {
        const veg = document.getElementById("vegan").value;
        diet.pop(veg)
    }
    if (form.getElementsByClassName('gluten').checked) {
        const glute = document.getElementById('gluten').value;
        diet.push(glute)
    }
    if (form.getElementsByClassName('paleo').checked) {
        const pal = document.getElementById('paleo').value;
        diet.push(pal)
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);