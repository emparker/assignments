import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
// import { IssueContext } from '../context/IssueProvider.js'
import IssueForm from '../forms/IssueForm.js'
import axios from 'axios'

export default function Issue(props){
    const { issue } = props
    const {user: {_id}} = useContext(UserContext)
    
    const initInputs = { title: issue.title, description: issue.description }
    const [ inputs, setInputs ] = useState(initInputs)
    // const [showEditButtom, setShowEditButton] = useState(false)
    const [showEditForm, setShowEditForm ] =useState(false)
    const [ editIssue, setEditIssue ] = useState(initInputs)
    
    const issueAxios = axios.create()
        issueAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    function createEditOnIssue(inputs, _id ){
        issueAxios.put(`/api/issues/${_id}`, inputs)
        .then(response => setEditIssue(prevEditIssue => {
            return [prevEditIssue].map(editedIssue => editedIssue._id === _id ? response.data : editedIssue)
        }))
        .catch(err => console.log(err))
    }

    function editIssueSubmit(e){
        e.preventDefault()
        createEditOnIssue()
        // editIssue, _id  pass in above func?
        // setEditIssue(editIssue)
        setInputs(editIssue)
    }

    function authorOfIssue(){
        if(issue.author === _id)
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

    return (
        <>
            {!showEditForm ? (
                <div>
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
                {authorOfIssue && <button onClick={()=> setShowEditForm((prev)=> !prev)}>Edit</button> }
                </div>
                )
            :
            <div>
                {
                    <IssueForm
                    inputs= {inputs}
                    buttonText="Submit Edits"
                    handleChange={handleChange}
                    handleSubmit={editIssueSubmit}
                    />
                } 
            </div>
            }
        </>
    )
}

{/* display up/down votes */}
//issue vs userIssues
//only show edit button if its the author issue-DONE
//click event will toggle the form to show -DONE
//will need to check if the issue.author = logged in users id (use user provider to give user Id)-DONE
