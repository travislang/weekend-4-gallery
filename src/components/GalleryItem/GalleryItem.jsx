import React, { Component } from 'react';
// import './GalleryList.css';

class GalleryItem extends Component {

    render() {
        return(
            <div key={this.props.galleryItem.id}>
                <img src={this.props.galleryItem.path} alt=""/>
            </div>
        )
    }
}
export default GalleryItem;