import DataApi from '../DataApi.js';
import { data } from '../testData.json';

const api = new DataApi(data);

describe('DataApi', () => {
    it('exposes articles as an object', () => {
        const articles = api.getArticles();
        const articleId =data.articles[0].id;

        expect(articles).toHaveProperty(articleId);
    });
});