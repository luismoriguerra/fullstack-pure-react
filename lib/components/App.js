import React, { Component } from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';
const api = new DataApi(data);

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
        console.log(this.state);
    }


    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                authors={this.state.authors}
            />
            
        );
    }
}