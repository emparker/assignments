import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssueForm from '../forms/IssueForm.js'
import CommentList from './CommentList.js'
import CommentForm from '../forms/CommentForm.js'

export default function Issue(props){
    const { issue, comments, editIssue, deleteIssue, upVote, downVote, commentOnIssue, getComments } = props
    const { title, description, author, _id, votes } = issue
    const { upVotes, downVotes } = votes

    const { user } = useContext(UserContext)
    
    const initInputs = { title, description }
    const [ inputs, setInputs ] = useState(initInputs)

    const initCommentInputs = { text: "" }
    const [ commentInputs, setCommentInputs ] = useState(initCommentInputs)

    // const [commentListState, setCommentListState] = useState([])

    // const [ commentBtnText, setCommentBtnText ] = useState("")
    // function changeText(){
    //     setCommentBtnText({commentBtnText})
    // }

    const [ showEditForm, setShowEditForm ] = useState(false)
    const [ showComments, setShowComments ] = useState(false)

    function editIssueSubmit(e){
        e.preventDefault()
        editIssue(_id, inputs)
        setInputs(initInputs)
        setShowEditForm((prev)=> !prev)
    }

    function authorOfIssue(){
        if(author === user._id)
        // console.log("wtf")
        return true
    }

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleDelete(){
        deleteIssue(_id)
    }

    function handleUpVote(){
        upVote(_id, user._id)
    }

    function handleDownVote(){
        downVote(_id, user._id)
    }

    function handleCommentChange(e){
        const { name, value } = e.target
        setCommentInputs(prevCommentInputs => ({
            ...prevCommentInputs,
            [name]: value
        }))
    }

    
    function handleShowCommentToggle(){
        getComments(_id)
        setShowComments((prev)=> !prev)
    }

    // function showCommentTotal(issueId, commentId){
    //     if (issueId === commentId){
    //         setCommentListState(commentListState.length)
    //     }
    // }
    // useEffect(()=> {
    //     showCommentTotal(_id, comments._id)
    // }, [])

    function commentSubmit(e){
        e.preventDefault()
        console.log(commentInputs)
        commentOnIssue(_id, user._id, commentInputs)
        setCommentInputs(initCommentInputs)
    }

    return (
        <div>
            {!showEditForm ? (
                <>
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    {
                        authorOfIssue() && 
                        <div>
                            <button onClick={()=> setShowEditForm((prev)=> !prev)}>Edit</button> 
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    }
                        <div>
                            <button onClick={handleUpVote}>upvote</button>
                            {upVotes.length}
                            <button onClick={handleDownVote}>downvote</button>
                            {downVotes.length}
                            <button onClick={handleShowCommentToggle}>checkout the comments</button>
                            
                        </div>
                    </div>
                    <CommentForm 
                            inputs= {commentInputs}
                            handleCommentChange={handleCommentChange}
                            commentSubmit={commentSubmit}
                            buttonText="post your comment!"
                            // edit comment ??
                    />  
                    
                    {showComments &&
                        <div>
                            {/* <p>this is comments list</p> */}
                            <CommentList
                                    issue={_id} 
                                    comments={comments} 
                                    commentOnIssue={commentOnIssue}
                                />
                        </div>
                    }
                </>
            )
            
            :

                (
                    <div>
                        <IssueForm
                            inputs={inputs}
                            buttonText="Submit Edits"
                            handleChange={handleChange}
                            handleSubmit={editIssueSubmit}
                        />
                    
                    </div>
                )
            }
    </div>   
)}
