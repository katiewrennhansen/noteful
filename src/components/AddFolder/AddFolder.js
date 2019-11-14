import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AddFolder.css'
import config from '../../config'
import NoteContext from '../../NoteContext'


class AddFolder extends Component {

    static contextType = NoteContext;

    handleClickAdd = (e) => {
        e.preventDefault();
        const newFolder = {
            title: e.target.name.value
        }
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            body: JSON.stringify(newFolder),
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
                this.context.folders.push(data)
          })
          .catch(err => {
            console.log(err)
          })

          this.props.value.history.push('/');
    }

    render(){
        return (
            <div className='add-folder'>
                <div className='inner-content'>
                    <h1>Add New Folder</h1>
                    <form 
                        onSubmit={(e) => this.handleClickAdd(e)}
                    >
                        <label htmlFor='name'>Name</label>
                        <input 
                            id='name'
                            name='name' 
                            type='text'
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

export default AddFolder