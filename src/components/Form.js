import React, {Component} from "react";


class Form extends Component{
    render(){
        return(
            <form className="comment-form">
            <input
            type="text"
            placeholder="Your name"
            />
            <input
            type = "text"
            placeholder= "Say something..."
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