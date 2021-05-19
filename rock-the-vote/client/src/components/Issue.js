import React from 'react'


export default function Issue(props){
    
    return (
        <div>
            <h3>{props.issue.title}</h3>
            <p>{props.issue.description}</p>
            { authorOfIssue && <button onClick={ }>edit</button> }
            {/* display up/down votes */}
        </div>
    )
}

//only show edit button if its the author issue
//if there is a button showing have it toggle
//toggle form
//click even will toggle the form to show 
//will need to check if the issue.author = logged in users id (use user provider to give user Id)
//props.issue._id
//[displayIssueForm, setShowIssueForm] = useState(false)