import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';

import './GalleryItem.css';
import 'typeface-roboto';
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
        let loveDesc;

        // check the state for which element to display
        if ( displayPic ) {
            displayDiv = <img onClick={this.showPic} src={this.props.galleryItem.path} alt="" />
        } else {
            displayDiv = <div className='descDiv' onClick={this.hidePic}>{this.props.galleryItem.description}</div>
        }
        //same # of likes to a variable
        let likes = this.props.galleryItem.likes;
        // check how many people love the picture
        if( likes === 0 ) {
            loveDesc = <p>No love yet</p>
        }
        else if ( likes === 1 ) {
            loveDesc = <p>{likes} person loves this</p>
        }
        else {
            loveDesc = <p>{likes} people love this</p>
        }
        
        return(
            <div className='imgContainer'>
                <div className='imgDiv'>
                    {displayDiv}
                </div>
                <Button 
                    className='buttons'
                    variant="outlined" 
                    color="secondary" 
                    size='small'
                    onClick={() => this.props.handleDelete(this.props.galleryItem.id) }>
                    Remove
                    <DeleteIcon className='rightIcon' />
                </Button>
                <Button 
                    variant="outlined"
                    color="primary" 
                    className='likeButton buttons'
                    size='small' 
                    onClick={ () => this.props.addLike(this.props.galleryItem.id)}>
                    Like
                    <FavoriteIcon className='rightIcon' />
                </Button>
                    {loveDesc}
            </div>
        )
    }
}

export default GalleryItem;