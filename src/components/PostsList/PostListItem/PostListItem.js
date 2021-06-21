import React, { Component } from 'react';
import './PostListItem.scss';

export default class PostListItem extends Component  {
    changeClasses(mainClass, secondClass, event) {
        const classes = [mainClass];
        if (event) {
            classes.push(secondClass);
        }
        return classes.join(' ');
    }


    render() {
    
        return (
            <li className="PostListItem" id={this.props.id}>
                <p 
                    className={this.changeClasses('PostListItem__text', 'important', this.props.isImportant)} 
                    onClick={() => this.props.makeLiked(this.props.id)}
                >
                {this.props.text}
                </p>
                <div className="PostListItem__icons"> 
                    <i className={this.changeClasses('far fa-star', 'important', this.props.isImportant)} 
                    onClick={() => this.props.makeImportant(this.props.id)}/>
                    <i className="fas fa-trash-alt" onClick={() => this.props.onDelete(this.props.id)}/>
                    <i className={this.changeClasses('fas fa-heart', 'liked', this.props.isLiked)} 
                    onClick={() => this.props.makeLiked(this.props.id)}/>
                </div>
            </li>
        )
    }
}

