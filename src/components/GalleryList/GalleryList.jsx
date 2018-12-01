import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

    render() {
        
        let galleryList = this.props.galleryList.map( item => {
            return (
                <GalleryItem key={item.id} galleryItem={item} />
            )
        })
        console.log( 'gal:', galleryList )
        return (
            galleryList
        );
    }
}

export default GalleryList;