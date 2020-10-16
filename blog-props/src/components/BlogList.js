import React from "react"
import fakeAPI from "../fakeAPI"
import BlogPost from './BlogPost'


function BlogList() {

    const mappedAPI = fakeAPI.map(post => 
        <BlogPost
            key={post.id}
            postData={post}
        />)
    
    return (
        <div>
            {mappedAPI}
        </div>
    )
}

export default BlogList 