import React from 'react'

export default function CommentForm(props){

    const {
        handleCommentChange,
        commentSubmit,
        buttonText,
        inputs: { text }
    } = props

    // console.log(commentSubmit)

    return (
        <div>
            <form onSubmit={commentSubmit}>
                <textarea
                    type="text"
                    value={text}
                    name="text"
                    onChange={handleCommentChange}
                    placeholder= "write your thoughts!"
                />
                <button>{buttonText}</button>
            </form>

        </div>
        
    )

}