import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickby from 'lodash.pickby';
import Timestamp from './Timestamp';

import Perf from 'react-addons-perf';
if (typeof window !== 'undefined')
    window.Perf = Perf;

export default class App extends React.Component {

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
        setImmediate(Perf.start);
        setTimeout(() => {
            Perf.stop();
            Perf.printWasted();
        }, 5000);
    }

    componentWillUnmount = () => {
        this.props.store.unsubcribe(this.subscriptionId);
    }
    
    render() {

        let { articles , searchTerm} = this.state;
        const searchRE = new RegExp(searchTerm, 'i');
        if(searchTerm) {
            articles = pickby(articles, (value) => {
                return value.title.match(searchRE) || value.body.match(searchRE);
            });
        }

        return (
            <div>
                <Timestamp />
                <SearchBar />
                <ArticleList articles={articles} />
            </div>

        );
    }
}