import React from "react"

function BlogPost(props) {
    
    console.log(props)
    return (
        <div className="post">
            <h1>{props.postData.title}</h1>
            <h3>{props.postData.subTitle}</h3>
            <p id="first">{props.postData.author}</p>
            <p id="second">{props.postData.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost