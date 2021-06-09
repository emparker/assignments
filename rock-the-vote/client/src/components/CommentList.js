import React from 'react'
import Comment from './Comment.js'


export default function CommentList(props){
    const { issue, comments, user} = props
    const { _id } = issue
    // , getNameOfCommenter
    return (
        <div>
            {comments.map((comment, index) => <Comment 
                                                    key={index}
                                                    issue={_id}
                                                    comment={comment}
                                                    user={user}
                                                    // getNameOfCommenter={getNameOfCommenter}
                                                />)}
        </div>
    )
}