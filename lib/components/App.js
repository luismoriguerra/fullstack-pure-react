import React, { Component } from 'react';

import DataApi from 'state-api';
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
    }

    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId]
    }

    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
            
        );
    }
}