var form = document.getElementById("airlineForm");   //null??
var submit = document.getElementById("submit");
var query = document.querySelector;

submit.addEventListener("click", function formAlert(){
    const firstName = form.elements["firstName"].value;  //just had 'elements["name"].value
    const lastName = form.elements["lastName"].value;       //form is null??
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travelLocation"].value;
    const diet = [];
    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
        
    } else if (form.elements["gluten"].checked) {
        diet.push(document.getElementById("gluten").value);
        
    } else if (form.elements["paleo"].checked) {
        diet.push(document.getElementById("paleo").value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");

})