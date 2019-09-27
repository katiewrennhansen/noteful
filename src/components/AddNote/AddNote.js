import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AddNote.css'

class AddNote extends Component {
    render(){
        return (
            <div className='add-note'>
                <div className='inner-content'>
                    <h1>Add New Note</h1>
                    <form>
                        <label htmlFor='name'>Name</label>
                        <input name='name' type="text"></input>
                        <label htmlFor='content'>Content</label>
                        <textarea name='content'></textarea>
                        <label htmlFor='folder'>Folder</label>
                        <input name='folder' type="text"></input>
                        <input type='submit'></input>
                    </form>
                    <Link to='/'>
                        <button className='back-button'>Back</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default AddNote