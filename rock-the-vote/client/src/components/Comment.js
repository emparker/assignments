import React from "react";
// import { UserContext } from '../context/UserProvider.js'

export default function Comment(props) {
  const { comment, issue } = props;
  const { text } = comment;

  // function theUsersComment(state){
  //     if(comment.author === user._id){
  //         setAuthorOfComment(user.username)
  //     }
  // }

  return (
    <div>
      <p>
        {comment.author.username} says: {text}
      </p>
    </div>
  );
}

// {theUsersComment(authorOfCommentState)}   put back in p tag?
