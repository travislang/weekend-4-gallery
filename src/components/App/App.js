import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import AddImageForm from '../AddImageForm/AddImageForm';

class App extends Component {
    state = {
        image: {
            path: '',
            desc: ''
        },
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
    handleChange = (name) => {
        return (e) => {
            this.setState({
               image: {
                   ...this.state.image,
                   [name]: e.target.value
               } 
            })
        }
    }
    handleClick = () => {
        const newImage = this.state.image;
        axios(`/gallery`, newImage)
        .then( res => {
            this.getGallery();
            this.setState({
                image: {
                    path: '',
                    desc: ''
                }
            });
        }).catch( err => {
            console.log( 'error in POST route:', err );
        });
    }

    componentDidMount() {
        this.getGallery();
    }

    render() {
        console.log(this.state.image);
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Gallery of my life</h1>
                </header>
                <AddImageForm 
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    image={this.state.image}
                />
                <br />
                <div className='container'>
                    <GalleryList galleryList={this.state.galleryList} addLike={this.addLike} />
                </div> 
            </div>
        );
    }
}

export default App;
