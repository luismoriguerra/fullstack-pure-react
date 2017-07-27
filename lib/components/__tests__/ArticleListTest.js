import React from 'react';
import ArticleList from '../ArticleList';
// import renderer from 'react-test-renderer';
import 'babel-polyfill';
import { shallow } from 'enzyme';
import Article from '../Article';
// remove warning props
Article.propTypes = {};

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' },
        },
        store: {
            lookupAuthor: jest.fn(() => ({})),
        },
    };

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList 
                {...testProps}
            />
        );

        expect(wrapper.node.props.children.length).toBe(2);
        // console.log(tree);
        // expect(tree.children.length).toBe(2);
        expect(wrapper).toMatchSnapshot();

    });

});