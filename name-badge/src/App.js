import React from "react"
import Form from "./Form"
import "./styles.css"

//syntax for below??
const App = () => {  
    return (
        <div>
            <h1>Welcome to Name Badge!</h1>
            <h2>Please enter your information below and hit SUBMIT</h2>
            <br/>
            <br/>
            <Form />
        </div>
    )
}

export default App

// The user should be able to enter their information in the badge fields.
// Upon submit, the badge fields should be cleared, and a new badge should be displayed below the badge form.
// Each time the user submits a badge, each badge will be printed below the form.
// Specify input types to correspond with the required information.
// Add a minimal character count of 3 for each field.
// Note: The new badge should not appear until after it is submitted.
// If any of the input fields are empty the Submit button should be disabled
// Write validation code to make sure the phone number field only has numbers (no dashes or special characters, must look like this 9757653323

// Start writing sudo code
// What components will you need? app will render (map it?) a badge and set as array in state.
// What values of state do you need? where to set state? first name, last name, email, phone, place of birth, fave food, text field.

// Recommendation
// Store all badges in an array in state
// Display each badge by mapping through the badges array.