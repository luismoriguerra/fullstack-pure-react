import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

// add a shouldComponentUpdate implementation , shallow compare of state and props
class SearchBar extends PureComponent {
    state = {
        searchTerm: ''
    }

    doSearch = debounce(() => {
        this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300)

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value}, () => {
            this.doSearch();
        });
    }

    componentWillUpdate = () => {
        console.log('updating search bar');
    }
    
    

    render() {
        return (
            <input 
                type="search" 
                value={this.state.searchTerm}
                onChange={this.handleSearch}
                placeholder="enter a search term"
            />
        );
    }
}



export default storeProvider()(SearchBar);