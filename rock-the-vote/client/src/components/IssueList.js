import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){
    const { issues } = props

    return (
        <div>
            {issues.map(issue => <Issue key={issue._id} issue={issue} />)}
        </div>
    )
}