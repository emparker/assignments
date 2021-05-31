import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
// import Issue from './Issue.js'
import IssueList from './IssueList'
// import IssueForm from '../forms/IssueForm.js'
import { UserContext } from '../context/UserProvider.js'
import { IssueContext } from '../context/IssueProvider.js'


export default function PublicPage(){
    const { 
        user: {username}, 
        logout 
    } = useContext(UserContext)


    const { 
        issues, 
        comments,
        getAllIssues, 
        deleteIssue, 
        editIssue, 
        upVote, 
        downVote,
        commentOnIssue,
        getComments 
    } = useContext(IssueContext)

    useEffect(() => {
        getAllIssues()
    }, [])

    return (
        <div>
            <Navbar username={username}/>

            <IssueList 
                issues={issues} 
                comments={comments}
                editIssue={editIssue} 
                deleteIssue={deleteIssue} 
                upVote={upVote} 
                downVote={downVote}               
                commentOnIssue={commentOnIssue}
                getComments={getComments}
            />

            <Footer logout={logout}/>
        </div>
    )
}