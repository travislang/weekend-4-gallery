import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    //set state init to true so picture renders
    state = {
        displayPic: true
    }
    //methods to toggle pics on click
    showPic = () => {
        this.setState({ displayPic: false })
    }
    hidePic = () => {
        this.setState( {displayPic: true } )
    }

    render() {
        // set state as variable to use later
        let displayPic = this.state.displayPic;
        let displayDiv;

        // check the state for which element to display
        if ( displayPic ) {
            displayDiv = <img onClick={this.showPic} src={this.props.galleryItem.path} alt="" />
        } else {
            displayDiv = <div className='descDiv' onClick={this.hidePic}>{this.props.galleryItem.description}</div>
        }
        
        return(
            <div className='imgContainer'>
                <div className='imgDiv'>
                    {displayDiv}
                </div>
                <button className='likeButton' onClick={ () => this.props.addLike(this.props.galleryItem.id) }>Like</button>
                <p>{this.props.galleryItem.likes} people like this</p>
            </div>
        )
    }
}

export default GalleryItem;