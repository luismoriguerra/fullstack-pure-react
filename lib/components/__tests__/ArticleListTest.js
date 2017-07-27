import React from 'react';
import ArticleList from '../ArticleList';
import 'babel-polyfill';
import { shallow } from 'enzyme';


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

        expect(wrapper.find('ArticleContainer').length).toBe(2);
        // console.log(tree);
        // expect(tree.children.length).toBe(2);
        expect(wrapper).toMatchSnapshot();

    });

});