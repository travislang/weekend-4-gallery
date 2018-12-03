import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {

    render() {
        
        let galleryList = this.props.galleryList.map( item => {
            return (
                <GalleryItem 
                    key={item.id} 
                    galleryItem={item} 
                    addLike={this.props.addLike}
                    handleDelete={this.props.handleDelete}
                    />
            )
        })
        return (
            galleryList
        );
    }
}

export default GalleryList;