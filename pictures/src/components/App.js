import React from 'react';
import axios from 'axios';

import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        axios('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 9bc1f6ef8d9a8bb38351ec058daa73333a82e56f25477c724128c801fd71a8c2'
            }
        });
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;