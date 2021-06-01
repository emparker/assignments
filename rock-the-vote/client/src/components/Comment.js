import React from 'react'

export default function Comment(props){

    const { comment } = props
    const { text } = comment

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}
