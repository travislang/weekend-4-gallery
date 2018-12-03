import React, { Component } from 'react';
import './AddImageForm.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

class AddImageForm extends Component {
    render() {
        return (
            <div className='formContainer'>
                <input type="text" placeholder='image URL' onChange={ this.props.handleChange('path')} value={this.props.image.path} />
                <input type="text" placeholder='image Description' onChange={this.props.handleChange('desc')} value={this.props.image.desc}/>
                <Button
                    variant="contained"
                    color="primary"
                    size='small'
                    onClick={this.props.handleClick}>
                    Add New Image
                </Button>
            </div>
        )
    }
}

export default AddImageForm;