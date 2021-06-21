import React, { Component } from 'react';
import './AddPost.scss';

export default class AddPost extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            newPostText: ''
        }
    }

    takeNewPostText = (event) => {
        const text = event.target.value;
        this.setState({
            newPostText: text
        });
    }

    addNewPostOnPage = () => {
        this.props.addNewPost(this.state.newPostText);
        this.setState({
            newPostText: ''
        })
    }

    render() {
        return (
            <div className="AddPost">
                <input 
                    className="AddPost__input" 
                    type="text" 
                    placeholder="What to post..." 
                    onChange={this.takeNewPostText}
                    value={this.state.newPostText}
                />
                <button className="AddPost__button" onClick={this.addNewPostOnPage}>Post</button>
            </div>
        )
    }
}

