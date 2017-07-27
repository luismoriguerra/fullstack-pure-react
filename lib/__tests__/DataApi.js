import StateAPi from 'state-api';
import { data } from '../testData.json';

const store = new StateAPi(data);

describe('DataApi', () => {
    it('exposes articles as an object', () => {
        const articles = store.getState().articles;
        const articleId =data.articles[0].id;

        expect(articles).toHaveProperty(articleId);
    });
});