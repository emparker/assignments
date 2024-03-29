import React, { useState } from "react";
import axios from "axios";

export const IssueContext = React.createContext();

const issueAxios = axios.create();
issueAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function IssueProvider(props) {
  const initState = {
    issues: [],
    userIssues: [],
    // comments: [],
  };

  const [issuesState, setIssuesState] = useState(initState);

  // const [authorOfCommentState, setAuthorOfComment ] = useState("")

  function createIssue(newIssue) {
    issueAxios
      .post("/api/issues", newIssue)
      .then((response) =>
        setIssuesState((prevIssuesState) => ({
          ...prevIssuesState,
          userIssues: [...prevIssuesState.userIssues, response.data],
        }))
      )
      .catch((err) => console.log(err));
  }

  function editIssue(_id, inputs) {
    issueAxios
      .put(`/api/issues/${_id}`, inputs)
      .then((response) =>
        setIssuesState((prevIssuesState) => {
          return {
            ...prevIssuesState,
            userIssues: prevIssuesState.userIssues.map((issue) =>
              _id === issue._id ? response.data : issue
            ),
            issues: prevIssuesState.issues.map((issue) =>
              _id === issue._id ? response.data : issue
            ),
          };
        })
      )
      .catch((err) => console.log(err));
  }

  function getAllIssues() {
    issueAxios
      .get("/api/issues")
      .then((response) => {
        setIssuesState((prevIssuesState) => ({
          ...prevIssuesState,
          issues: response.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }
  //remove try catch?
  function getIssuesByAuthor(authorId) {
    issueAxios
      .get("/api/issues/by-user", authorId)
      .then((response) => {
        try {
          setIssuesState((prevIssuesState) => ({
            ...prevIssuesState,
            userIssues: response.data,
          }));
        } catch {
          console.log(response);
        }
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function deleteIssue(_id) {
    issueAxios
      .delete(`/api/issues/${_id}`)
      .then((response) => {
        setIssuesState((prevIssuesState) => {
          return {
            ...prevIssuesState,
            userIssues: prevIssuesState.userIssues.filter(
              (issue) => issue._id !== _id
            ),
            issues: prevIssuesState.issues.filter((issue) => issue._id !== _id),
          };
        });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function upVote(issueId, _id) {
    issueAxios
      .put(`/api/issues/up-vote/${issueId}`)
      .then((response) =>
        setIssuesState((prevIssuesState) => {
          return {
            ...prevIssuesState,
            userIssues: prevIssuesState.userIssues.map((issue) =>
              issue._id === issueId ? response.data : issue
            ),
            issues: prevIssuesState.issues.map((issue) =>
              issue._id === issueId ? response.data : issue
            ),
          };
        })
      )
      .catch((err) => console.log(err));
  }

  function downVote(issueId, _id) {
    issueAxios
      .put(`/api/issues/down-vote/${issueId}`)
      .then((response) =>
        setIssuesState((prevIssuesState) => {
          return {
            ...prevIssuesState,
            userIssues: prevIssuesState.userIssues.map((issue) =>
              issue._id === issueId ? response.data : issue
            ),
            issues: prevIssuesState.issues.map((issue) =>
              issue._id === issueId ? response.data : issue
            ),
          };
        })
      )
      .catch((err) => console.log(err));
  }

  function commentOnIssue(issueId, _id, newComment) {
    return issueAxios.post(`/api/comments/${issueId}`, newComment).then((response) => response.data)
    // .then((response) =>
    //   setIssuesState((prevIssuesState) => ({
    //     ...prevIssuesState,
    //     comments: [...prevIssuesState.comments, response.data],
    //   }))
    // );
  }

  function getComments(issueId) {
    return issueAxios.get(`/api/comments/${issueId}`).then((response) => response.data)
    // .then((response) =>
    //   setIssuesState((prevIssuesState) => ({
    //     ...prevIssuesState,
    //     comments: response.data,
    //   }))
    // );
  }

  // function getNameOfCommenter(issueId, userId, authorName){
  //     issueAxios.get(`api/comments/${issueId}/by-author`, userId, authorName)
  //     .then(response => setAuthorOfComment(response.data))
  // }

  return (
    <IssueContext.Provider
      value={{
        ...issuesState,
        createIssue,
        editIssue,
        getAllIssues,
        getIssuesByAuthor,
        deleteIssue,
        upVote,
        downVote,
        commentOnIssue,
        getComments,
        // authorOfCommentState,
        // getNameOfCommenter
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
}
