import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import PostsList from '../../components/PostsList/PostsList';
import AddPost from '../../components/AddPost/AddPost';

class App extends Component {
    state = {
        posts: [
            {text: "If u wanna change your life", id: 0, isImportant: false, isLiked: false},
            {text: "If u wanna change your body", id: 1, isImportant: false, isLiked: false},
            {text: "do it everywhere", id: 2, isImportant: false, isLiked: false},
            {text: "Absolutly", id: 3, isImportant: false, isLiked: false}
        ],
        searchRequest: '',
        filter: 'all'
    }

    onDelete = (id) => {
        const postsWithoutDeleted = this.state.posts;
        const deletedItem = postsWithoutDeleted.findIndex(item => item.id === id);
        postsWithoutDeleted.splice(deletedItem, 1);
        postsWithoutDeleted.forEach((item, index) => item.id = index);
        this.setState({
            posts: postsWithoutDeleted
        });
    }

    addNewPost = (body) => {
        const posts = this.state.posts;
        const newPost = {
            text: body,
            id: 0,
            isImportant: false, 
            isLiked: false
        }
        posts.push(newPost);
        posts.forEach((item, index) => item.id = index);
        this.setState({
            posts: posts
        });
    }

    makeImportant = (id) => {
        const posts = this.state.posts;
        const importantPost = posts.findIndex(post => post.id === id);
        posts[importantPost].isImportant = !posts[importantPost].isImportant;
        this.setState({
            posts: posts
        })
    }

    makeLiked = (id) => {
        const posts = this.state.posts;
        const likedPost = posts.findIndex(post => post.id === id);
        posts[likedPost].isLiked = !posts[likedPost].isLiked;
        this.setState({
            posts: posts
        })
    }

    updateSearchRequest = (newSearchRequest) => {
        this.setState({
            searchRequest: newSearchRequest
        })
    }

    showVisiblePosts() {
        if (this.state.searchRequest === '') {
            return this.state.posts;
        } else {
            // const regExp = new RegExp(this.state.searchRequest, 'gi')
            // return this.state.posts.filter(post => regExp.test(post.text));
            return this.state.posts.filter(item => item.text.toLowerCase().indexOf(this.state.searchRequest.toLowerCase()) > -1);
        }
    }

    filterPosts(posts, filter) {
        if (filter === 'isLiked') {
            return posts.filter(post => post.isLiked);
        } else {
            return posts;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const filter = this.state.filter;
        const visiblePosts = this.filterPosts(this.showVisiblePosts(this.state.posts), filter);

        return (
            <div className="App">
                <Header posts={this.state.posts}/>
                <Search 
                    updateSearchRequest={this.updateSearchRequest}
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                />
                <PostsList 
                    posts={visiblePosts} 
                    onDelete={this.onDelete} 
                    makeImportant={this.makeImportant} 
                    makeLiked={this.makeLiked}
                />
                <AddPost addNewPost={this.addNewPost}/>
            </div>
        );
    }
}

export default App;