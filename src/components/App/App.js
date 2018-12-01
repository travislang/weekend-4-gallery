import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
    state = {
        galleryList: []
    }

    // get all gallery images from server
    getGallery() {
        axios.get('/gallery')
        .then( res => {
            this.setState({
                galleryList: res.data
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
                <div className='container'>
                    <GalleryList galleryList={this.state.galleryList} />
                </div> 
            </div>
        );
    }
}

export default App;
