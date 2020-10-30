import React from "react"


function App() {
    return (
        <div>
            <h1>hii from App Component</h1>
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
// What components will you need? app will render (map it?) a badge and put into array in state.
// What values of state do you need? first name, last name, email, phone, place of birth, fave food, text field.

// Recommendation
// Store all badges in an array in state
// Display each badge by mapping through the badges array.