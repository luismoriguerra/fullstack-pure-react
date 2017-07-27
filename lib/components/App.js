import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickby from 'lodash.pickby';


export default class App extends Component {

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    state = this.props.store.getState();

    setSearchTerm = (searchTerm) => {
        this.setState({searchTerm});
    }

    render() {

        let { articles , searchTerm} = this.state;
        if(searchTerm) {
            articles = pickby(articles, (value) => {
                return value.title.match(searchTerm) || value.body.match(searchTerm);
            });
        }

        return (
            <div>
                <SearchBar doSearch={this.setSearchTerm} />
                <ArticleList
                    articles={articles}
                    store={this.props.store}
                />
            </div>

        );
    }
}