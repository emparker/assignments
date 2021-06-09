import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider.js";
import IssueForm from "../forms/IssueForm.js";
import CommentList from "./CommentList.js";
import CommentForm from "../forms/CommentForm.js";
import "../css/issue.css";

export default function Issue(props) {
  const {
    issue,
    // comments,
    editIssue,
    deleteIssue,
    upVote,
    downVote,
    commentOnIssue,
    getComments,
  } = props;
  const { title, description, author, _id, votes } = issue;
  const { upVotes, downVotes } = votes;
  // , authorOfCommentState, getNameOfCommenter  move back to props?

  const { user } = useContext(UserContext);

  const initInputs = { title, description };
  const [inputs, setInputs] = useState(initInputs);

  const initCommentInputs = { text: "" };
  const [commentInputs, setCommentInputs] = useState(initCommentInputs);

  const [showEditForm, setShowEditForm] = useState(false);
  const [showComments, setShowComments] = useState(false);

  function editIssueSubmit(e) {
    e.preventDefault();
    editIssue(_id, inputs);
    setInputs(initInputs);
    setShowEditForm((prev) => !prev);
  }

  function closeEditForm(e) {
    e.preventDefault();
    setShowEditForm((prev) => !prev);
  }
  function authorOfIssue() {
    if (author === user._id)
      // console.log("wtf")
      return true;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleDelete() {
    deleteIssue(_id);
  }

  function handleUpVote() {
    upVote(_id, user._id);
  }

  function handleDownVote() {
    downVote(_id, user._id);
  }

  function handleCommentChange(e) {
    const { name, value } = e.target;
    setCommentInputs((prevCommentInputs) => ({
      ...prevCommentInputs,
      [name]: value,
    }));
  }

  const [comments, setComments] = useState([])

  function handleShowCommentToggle() {
    getComments(_id).then((issueComments) => setComments(issueComments))
    setShowComments((prev) => !prev)
   
}

  function commentSubmit(e) {
    e.preventDefault();
    console.log(commentInputs);
    commentOnIssue(_id, user._id, commentInputs)
        .then((commentOnIssue) => setComments((prevComments) => {
            return (
            [ ...prevComments, commentOnIssue ])
        }))
    setCommentInputs(initCommentInputs);
  }

  return (
    // <div className="glass-div">
    <div className="issue-card">
      {!showEditForm ? (
        <>
          <div className="card-content">
            <h3 id="title">{title}</h3>
            <hr id="line"></hr>
            <p>{description}</p>
            {authorOfIssue() && (
              <div>
                <button onClick={() => setShowEditForm((prev) => !prev)}>
                  Edit
                </button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
            <div>
              <button onClick={handleUpVote}>upvote</button>
              {upVotes.length}
              <button onClick={handleDownVote}>downvote</button>
              {downVotes.length}
              <button onClick={handleShowCommentToggle}>
                checkout the comments {comments.length}
              </button>
            </div>
            <CommentForm
              inputs={commentInputs}
              handleCommentChange={handleCommentChange}
              commentSubmit={commentSubmit}
              buttonText="post your comment!"
            />
          </div>

          {showComments && (
            <div className="card-content">
              <CommentList
                issue={_id}
                comments={comments}
              />
            </div>
          )}
        </>
      ) : (
        <div className="card-content">
          <IssueForm
            inputs={inputs}
            buttonText="Submit Edits"
            handleChange={handleChange}
            handleSubmit={editIssueSubmit}
            closeEditForm={closeEditForm}
          />
        </div>
      )}
    </div>
  )
}
