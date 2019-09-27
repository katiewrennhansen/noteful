import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AddFolder.css'

class AddFolder extends Component {
    render(){
        return (
            <div className='add-folder'>
                <div className='inner-content'>
                    <h1>Add New Folder</h1>
                    <form>
                        <label htmlFor='name'>Name</label>
                        <input name='name' type="text"></input>
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

export default AddFolder