import React, { Component } from "react";
import CommentList from "../components/CommentList";
import Form from "../components/Form"

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1,
          author: "Brendan Eich",
          text: "Always bet on JavaScript."
        },
        { id: 2,
          author: "Reg Braithwaite",
          text: "The strength of JavaScript is that you can do anything. The weakness is that you will."
        }
      ]
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleCommentSubmit(submittedComment){
    submittedComment.id = Date.now()
    const updatedComments = [...this.state.data, submittedComment] // spread operator is ..., copies state then makes new one.
    this.setState({data: updatedComments})
  }

  render() {
    return (
      <div className="comment-box">
        <h2>Add a comment</h2>
        <Form onCommentSubmit = {this.handleCommentSubmit}/>
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;
