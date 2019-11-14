import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AddNote.css'
import config from '../../config'
import NoteContext from '../../NoteContext'

class AddNote extends Component {
    static contextType = NoteContext;

    handleClickAdd = (e) => {
        e.preventDefault();
        const newNote = {
            title: e.target.name.value,
            content: e.target.content.value,
            folder_id: e.target.folder.value
        }
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
              'content-type': 'application/json'
            },
          })
          .then(res => {
            if(!res.ok){
              console.log('not okay')
            }
            return res.json();
          })
          .then((data) => {
            this.context.notes.push(data)
          })
          .catch(err => {
            console.log(err)
          })

    }

    render(){
        return (
            <div className='add-note'>
                <div className='inner-content'>
                    <h1>Add New Note</h1>
                    <form
                        onSubmit={(e) => this.handleClickAdd(e)}
                    >
                        <label htmlFor='name'>Name</label>
                        <input 
                            name='name' 
                            type="text" 
                            required
                        />
                        <label htmlFor='content'>Content</label>
                        <textarea name='content'></textarea>
                        <label htmlFor='folder'>Folder</label>
                        <input 
                            name='folder' 
                            type="text"
                        />
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