import React from 'react';
import './PostsList.scss';
import PostListItem from './PostListItem/PostListItem';

const PostsList = props => {
    return (
        <ul className="PostsList">
            {props.posts.map((post, index) => {
                return (
                    <PostListItem 
                        key={index} 
                        text={post.text} 
                        id={post.id} 
                        isImportant={post.isImportant}
                        isLiked={post.isLiked}
                        onDelete={props.onDelete}
                        makeImportant={props.makeImportant}
                        makeLiked={props.makeLiked}
                    />
                )
            })}
        </ul>
    )
}

export default PostsList;