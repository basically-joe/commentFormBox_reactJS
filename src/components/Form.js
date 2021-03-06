import React, {Component} from "react";


class Form extends Component{

constructor(props) {
super(props)
this.state = {
    author: "",
    text: ""
}
this.handleAuthorChange = this.handleAuthorChange.bind(this)
this.handleTextChange = this.handleTextChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)


}

handleAuthorChange(e){
    this.setState({author: e.target.value})
}

handleTextChange(e){
    this.setState({text: e.target.value})
}

handleSubmit(e){
    e.preventDefault();
    const newComment = {author: this.state.author, text: this.state.text}
    this.props.onCommentSubmit(newComment)
    this.setState({author: "", text: ""})
    // run callback in props passing in new Comment
}

    render(){
        return(
            <form 
            className="comment-form"
            onSubmit={this.handleSubmit}
            >
            
            <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
            />
            <input
            type = "text"
            placeholder= "Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
            />
            <input
            type="submit"
            value="Post"
            />
            </form>
        )
    }
}


export default Form;