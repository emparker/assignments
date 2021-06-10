import React from 'react'
import '../css/forms.css'

export default function CommentForm(props){

    const {
        handleCommentChange,
        commentSubmit,
        buttonText,
        inputs: { text }
    } = props

    // console.log(commentSubmit)

    return (
        <div id="comment-form-div">
            <form onSubmit={commentSubmit} id="comment-form-content">
                <textarea
                    type="text"
                    value={text}
                    name="text"
                    onChange={handleCommentChange}
                    placeholder= "write your thoughts!"
                />
                <button id="comment-btn">{buttonText}</button>
            </form>

        </div>
        
    )

}