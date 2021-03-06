import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import AddImageForm from '../AddImageForm/AddImageForm';

class Home extends Component {
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
            .then(res => {
                this.setState({
                    galleryList: res.data
                })
            })
            .catch(err => {
                console.log('error in GET route:', err);
            });
    }
    addLike = (id) => {
        axios.put(`/gallery/like/${id}`)
            .then(res => {
                this.getGallery();
            }).catch(err => {
                console.log('error in post route:', err);
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
        axios.post(`/gallery`, newImage)
            .then(res => {
                this.getGallery();
                this.setState({
                    image: {
                        path: '',
                        desc: ''
                    }
                });
            }).catch(err => {
                console.log('error in POST route:', err);
            });
    }
    handleDelete = (id) => {
        axios.delete(`/gallery/${id}`)
            .then(res => {
                this.getGallery();
            }).catch(err => {
                console.log('error in delete route:', err);
            });
    }

    componentDidMount() {
        this.getGallery();
    }

    render( ) {
        return (
            <div className="App">
                <AddImageForm
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    image={this.state.image}
                />
                <br />
                <div className='container'>
                    <GalleryList
                        galleryList={this.state.galleryList}
                        addLike={this.addLike}
                        handleDelete={this.handleDelete}
                    />
                </div>
            </div>
        )
    }
}

export default Home;