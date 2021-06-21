import React from 'react';
import './Header.scss';

const Header = props => {
    const likedPosts = props.posts.filter(item => item.isLiked).length;
    return (
        <div className="Header">
            <h3 className="Header__title">Twit-app</h3>
            <p className="Header__count">{props.posts.length} posts, liked {likedPosts}</p>
        </div>
    )
}

export default Header;