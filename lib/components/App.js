import React, { Component } from 'react';
import ArticleList from './ArticleList';
import DataApi from 'state-api';
import axios from 'axios';
// import { data } from '../testData';
// const api = new DataApi(data);

export default class App extends Component {

    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors
    }
    // async componentDidMount() {
    //     const rawData = await axios.get('/data');
    //     const api = new DataApi(rawData.data);

    //     this.setState(() => {
    //         return {
    //             articles: api.getArticles(),
    //             authors: api.getAuthors()
    //         };
    //     });


    // }


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