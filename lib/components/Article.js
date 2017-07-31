import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

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

// only dispaly from props
class Article extends React.PureComponent {
    render() {
        const {article, author} = this.props;
       
        return (
            <div>
                <div>{article.title}</div>
                <div>{dateDisplay(article.date)}</div>
                <div>
                    <a href={author.website}>
                        {author.firstName} - {author.lastName}
                    </a>
                </div>
                <div>{article.body}</div>
            </div>
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

function extraProps(store, originalProps) {
    return {
        author: store.lookupAuthor(originalProps.article.authorId)
    };
}


export default storeProvider(extraProps)(Article);