import React, { useState, useContext, useEffect } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { UserContext } from '../context/UserProvider.js'
import { IssueContext } from '../context/IssueProvider.js'
import IssueForm from '../forms/IssueForm.js'
import IssueList from './IssueList.js'

const initInputs = { title: "", description: ""}

export default function ProfilePage(){
    const [ inputs, setInputs ] = useState(initInputs)

    const { 
        user: {username}, 
        logout 
    } = useContext(UserContext)

    const { 
        userIssues,
        comments,
        createIssue,
        editIssue,
        getIssuesByAuthor,
        deleteIssue,
        upVote,
        downVote,
        commentOnIssue,
        getComments
    } = useContext(IssueContext)
    // console.log(userIssues)

    useEffect(() => {
        getIssuesByAuthor()
    }, [])
    
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        createIssue(inputs)
        setInputs(initInputs)
    }

    return (
        <div>
            <Navbar username={username}/>
            <h1>hello { username }</h1>

            <IssueList 
                issues={userIssues} 
                comments={comments}
                editIssue={editIssue} 
                deleteIssue={deleteIssue} 
                upVote={upVote} 
                downVote={downVote}               
                commentOnIssue={commentOnIssue}
                getComments={getComments}
            /> 
            {/*
                -veiw comments per issue  - drop down comments per issue  - get comments by issue id
            */}
            
            <IssueForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                inputs={inputs}
                buttonText="Create Issue"
            />
            
            <Footer logout={logout}/>
        </div>
    )
}