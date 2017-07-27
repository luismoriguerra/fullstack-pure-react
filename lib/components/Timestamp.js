import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {
    render() {
        return (
            <div>
                {this.props.time}
            </div>
        );
    }
}

function extraProps (store) {
    return {
        time: store.getState().timestamp.toString()
    };
}

export default  storeProvider(extraProps)(Timestamp) ;