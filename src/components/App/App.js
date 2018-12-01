import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = {
        galleryItems: []
    }

    // get all gallery images from server
    getGallery() {
        axios.get('/gallery')
        .then( res => {
            this.setState({
                galleryItems: res.data
            })
        })
        .catch( err => {
            console.log( 'error in GET route:', err );
        });
    }

    componentDidMount() {
        this.getGallery();
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Gallery of my life</h1>
                </header>
                <br />
                <p>Gallery goes here</p>
                <img src="images/goat_small.jpg" />
            </div>
        );
    }
}

export default App;
