import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickby from 'lodash.pickby';
import Timestamp from './Timestamp';

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

    onStoreChange = () => {
        this.setState(this.props.store.getState());
    }

    componentDidMount = () => {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
    }

    componentWillUnmount = () => {
        this.props.store.unsubcribe(this.subscriptionId);
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
                <Timestamp />
                <SearchBar doSearch={this.props.store.setSearchTerm} />
                <ArticleList
                    articles={articles}
                    store={this.props.store}
                />
            </div>

        );
    }
}