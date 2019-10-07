import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AddFolder.css'
import config from '../../config'
import NoteContext from '../../NoteContext'


class AddFolder extends Component {

    static contextType = NoteContext;

    state = {
        folders: {}
      }

    // handleAddName = (name) => {
    //     this.setState({
    //         folders: {
    //             name: name
    //         }
    //     })
    // }

    // handleClickAdd = (e) => {
    //     e.preventDefault();
    //     const contextFolders = this.context.folders;
    //     console.log(contextFolders)
    //     fetch(`${config.API_ENDPOINT}/folders`, {
    //         method: 'POST',
    //         headers: {
    //           'content-type': 'application/json'
    //         },
    //       })
    //       .then(res => {
    //         if(!res.ok){
    //           console.log('not okay')
    //         }
    //         return res.json();
    //       })
    //       .then((data) => {
    //           console.log(data)
    //           this.setState({
    //               folders: {
    //                   id: data.id,
    //                   name: title
    //               }
    //           })
    //           console.log(this.state.folders)
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })

    //       this.props.value.history.push('/');
    // }

    render(){
        return (
            <div className='add-folder'>
                <div className='inner-content'>
                    <h1>Add New Folder</h1>
                    <form 
                        action={`${config.API_ENDPOINT}/folders`}
                        method='POST'
                    >
                        <label htmlFor='name'>Name</label>
                        <input 
                            name='name' 
                            type='text'
                            // onChange={(e) => this.handleAddName(e.target.value)}
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