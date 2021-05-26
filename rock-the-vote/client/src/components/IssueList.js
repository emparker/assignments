import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){
    const { issues, editIssue, deleteIssue, upVote } = props

    return (
        <div>
            {issues.map((issue, index) => <Issue key={index}
                                        issue={issue} 
                                        editIssue={editIssue} 
                                        deleteIssue={deleteIssue}
                                        upVote={upVote}
                                        />)}
        </div>
    )
}