import React, { Component } from 'react';
import './GalleryList.css';

class GalleryList extends Component {

    render() {

        let galleryList = this.props.galleryList.map( item => {
            return (
                <div key={item.id}>
                    <img src={item.path} alt='' />
                </div>
            )
        })
        console.log( galleryList )
        return (
            galleryList
        );
    }
}

export default GalleryList;