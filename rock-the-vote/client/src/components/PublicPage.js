import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
// import Issue from './Issue.js'
// import IssueList from './IssueList'
// import IssueForm from '../forms/IssueForm.js'


export default function PublicPage(){

    return (
        <div>
            <Navbar />
            test PublicPage.js
            {/* 
            
                *List of Issues -get all issues
                    -create a comment on an issue - get issue by id
                    -list of comments (dropdown)
                    -ability for upVoting/downVoting
                
                *Create issue <IssueForm />

            */}
            <Footer />
        </div>
    )
}