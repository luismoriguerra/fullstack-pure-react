import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {

    return class extends React.PureComponent {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object
        };

        onStoreChange = () => {
            if (this.subsId) {
                //this.forceUpdate();
                this.setState(this.usedState());
            }
        }

        componentDidMount = () => {
            this.subsId = this.context.store.subscribe(this.onStoreChange);
        }
        componentWillUnmount = () => {
            this.context.store.unsubcribe(this.subsId);
            this.subsId = null;
        }

        usedState = () => {
            return extraProps(this.context.store, this.props);
        }
        // componentWillUpdate = (nextProps, nextState) => {
        //     console.log(this.state, nextState);
        // }

        // updating the state at first time , avoid unnecesary renders and state comparisions
        state = this.usedState();
        

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.usedState()}
                    store={this.context.store}
                />
            );
        }
    };
};

export default storeProvider;