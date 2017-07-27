import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleWrapper = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
    margin-bottom: 10px;
`;
const Title = styled.div`
    font-weight: bold
`;
const DateWrapper = styled.div`
    font-size: 0.85em;
    color: #888
`;
const Author = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`;
const Body = styled.div`
    padding-left: 20px;
`;

const dateDisplay = (date) => {
    return new Date(date).toDateString();
};

class Article extends Component {
   
    render() {
        const {article} = this.props;
        const {store} = this.context;

        const author = store.lookupAuthor(article.authorId);

        return (
            <ArticleWrapper>
                <Title>{article.title}</Title>
                <DateWrapper>{dateDisplay(article.date)}</DateWrapper>
                <Author>
                    <a href={author.website}>
                        {author.firstName} - {author.lastName}
                    </a>
                </Author>
                <Body>{article.body}</Body>
            </ArticleWrapper>
        );
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};

Article.contextTypes = {
    store: PropTypes.object
};

export default Article;