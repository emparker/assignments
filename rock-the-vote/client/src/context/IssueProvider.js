import React, { useState } from 'react'
import axios from 'axios'

export const IssueContext = React.createContext()

const issueAxios = axios.create()
issueAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssueProvider(props){
    
    const initState = { 
        issues: [],
        userIssues: []
    }

    const [issuesState, setIssuesState] = useState(initState)

    function createIssue(newIssue){
        issueAxios.post("/api/issues", newIssue)
        .then(response => setIssuesState(prevIssuesState => ({
            ...prevIssuesState,
            userIssues: [...prevIssuesState.userIssues, response.data]
        })))
        .catch(err => console.log(err))
    }

    function getAllIssues(){
        issueAxios.get("/api/issues")
        .then(res => {
            setIssuesState(prevIssueState => ({
            ...prevIssueState,
            issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
//remove try catch?
    function getIssuesByAuthor(authorId){
        issueAxios.get("/api/issues/by-user", authorId)
        .then(res => {
            try{

                setIssuesState(prevIssueState => ({
                ...prevIssueState,
                userIssues: res.data
                }))
            } 
            catch{
                console.log(res)
            }
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <IssueContext.Provider 
            value={{
                ...issuesState,
                createIssue,
                getAllIssues,
                getIssuesByAuthor
            }}>
            { props.children }
        </IssueContext.Provider>
    )
}