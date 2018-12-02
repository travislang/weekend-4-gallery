import React, { Component } from 'react';

class AddImageForm extends Component {

    render() {
        return (
            <div className='formContainer'>
                <input type="text" placeholder='image URL' onChange={ this.props.handleChange('path')} value={this.props.image.path} />
                <input type="text" placeholder='image Description' onChange={this.props.handleChange('desc')} value={this.props.image.desc}/>
                <button onClick={this.props.handleClick}>Add New Image</button>
            </div>
        )
    }
}

export default AddImageForm;