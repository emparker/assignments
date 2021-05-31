import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){
    const { issues, comments, editIssue, deleteIssue, upVote, downVote, commentOnIssue, getComments } = props

    return (
        <div>
            {issues.map((issue, index) =>  <Issue 
                                                key={index}
                                                issue={issue} 
                                                comments={comments}
                                                editIssue={editIssue} 
                                                deleteIssue={deleteIssue}
                                                upVote={upVote}
                                                downVote={downVote}
                                                commentOnIssue={commentOnIssue}
                                                getComments={getComments}
                                            />)}
        </div>
    )
}