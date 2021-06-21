import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRequest: '',
        }
        this.buttons = [
            {name: 'all', label: 'all'},
            {name: 'isLiked', label: 'liked'},
        ]
    }

    takeSearchRequest = (event) => {
        const searchRequest = event.target.value;
        this.setState({
                searchRequest: searchRequest
            })
            
            this.props.updateSearchRequest(searchRequest);
        }
    
    render() {
        const buttons = this.buttons.map(button => {
            const classes = ['Search__button'];
            const active = this.props.filter === button.name;
            if (active) {
                classes.push('Search__button--active')
            }
            return <button 
                    key={button.name} 
                    className={classes.join(' ')}
                    onClick={() => this.props.onFilterSelect(button.name)}
                >
                {button.label}
                </button>
        });
        return (
            <div className="Search">
                <input 
                    className="Search__input" 
                    type="text" 
                    placeholder="Search..."
                    onChange={this.takeSearchRequest}
                />
                {buttons}
            </div>
        )
    }
}

