import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
    state = {
        galleryList: []
    }

    // get all gallery images from server
    getGallery = () => {
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
    addLike = ( id ) => {
        axios.put(`/gallery/like/${id}`)
        .then( res => {
            this.getGallery();
        }).catch( err => {
            console.log('error in post route:', err );
        })
    }

    componentDidMount() {
        this.getGallery();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Gallery of my life</h1>
                </header>
                <br />
                <div className='container'>
                    <GalleryList galleryList={this.state.galleryList} addLike={this.addLike} />
                </div> 
            </div>
        );
    }
}

export default App;
