import React, { useContext } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { UserContext } from '../context/UserProvider.js'
// import IssueForm from '../forms/IssueForm.js'
// import Issue from './Issue.js'
// import IssueList from './IssueList.js'

export default function ProfilePage(){
    const { user: {username} } = useContext(UserContext)

    return (
        <div>
            <Navbar />
            <h1>Hello { username }</h1>

            {/* 
                -user issues <IssueList />  - get all issues by user id
                -add an issue <IssueForm /> 
                -only access to edit button for issue is here in profile?  put request for issue by issue id
                -veiw comments per issue  - drop down comments per issue  - get comments by issue id
            */}
            
            <Footer />
        </div>
    )
}