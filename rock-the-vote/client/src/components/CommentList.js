import React from 'react'
import Comment from './Comment.js'


export default function CommentList(props){
    const { issue, comments } = props
    const { _id } = issue

console.log(comments)
    return (
        <div>
            {comments.map((comment, index) => <Comment 
                                                    key={index}
                                                    issue={_id}
                                                    comment={comment}
                                                />)}
        </div>
    )
}