import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssueForm from '../forms/IssueForm.js'

export default function Issue(props){
    const { issue, editIssue, deleteIssue, upVote, downVote } = props
    const { title, description, author, _id } = issue

    const { user } = useContext(UserContext)
    
    const initInputs = { title, description }
    const [ inputs, setInputs ] = useState(initInputs)
    const [ showEditForm, setShowEditForm ] = useState(false)

    function editIssueSubmit(e){
        e.preventDefault()
        editIssue(_id, inputs)
        setInputs(initInputs)
        // console.log(inputs)
        setShowEditForm((prev)=> !prev)
    }

    function authorOfIssue(){
        if(author === user._id)
        // console.log("wtf")
        return true
    }

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleDelete(){
        deleteIssue(_id)
    }

    function handleUpVote(){
        upVote(_id, user._id)
    }

    function handleDownVote(){
        downVote(_id, user._id)
    }

    return (
        <>
            {!showEditForm ? (
                <div>
                <h3>{title}</h3>
                <p>{description}</p>
                {
                    authorOfIssue() && 
                    <div>
                        <button onClick={()=> setShowEditForm((prev)=> !prev)}>Edit</button> 
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                }
                    <div>
                        <button onClick={handleUpVote}>upvote</button>
                        <button onClick={handleDownVote}>downvote</button>
                    </div>
                {/* 
                display the votes!
                 comments */}
                </div>
            )
            :
            (
                <div>
                    <IssueForm
                        inputs= {inputs}
                        buttonText="Submit Edits"
                        handleChange={handleChange}
                        handleSubmit={editIssueSubmit}
                    />
                </div>
            )
            }
        </>
    )
}

{/* display up/down votes */}
//issue vs userIssues
//only show edit button if its the author issue-DONE
//click event will toggle the form to show -DONE
//will need to check if the issue.author = logged in users id (use user provider to give user Id)-DONE
