import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';
import App from 'components/App';
import config from 'config';

const serverRender = async () => {
    const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StateApi(rawData.data);

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App store={store} />
        ),
        initialData : rawData.data
    };

    
};

export default serverRender;