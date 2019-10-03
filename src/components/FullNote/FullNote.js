import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import './FullNote.css'
import NoteContext from '../../NoteContext'
import config from '../../config'


class FullNote extends Component{
  static defaultProps = {
    match: {
        params: {

        }
    }
}

  static contextType = NoteContext

  handleDeleteNote = noteId => {
    this.props.history.push('/');
  }

  handleClickDelete = e => {
    e.preventDefault();
    const noteId = this.props.noteId

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
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
    .then(() => {
      this.context.deleteNote(noteId)
      this.handleDeleteNote(noteId)
    })
    .catch(err => {
      console.log(err)
    })

  }

  render() {
        const notes = this.context.notes;
        const displayNote = notes.map(note => {
          if (this.props.noteId === note.id){
            return (
              <div className='full-note' key={note.id}>
                <h2>{note.name}</h2>
                <p>Last Modified on {note.modified}</p>
                <p>{note.content}</p>
                <Link to='/'>
                    <button>Back</button>  
                </Link>
                <button onClick={this.handleClickDelete}>Delete</button>
              </div>
            )
          }
        })
        return (
        <li>
          {displayNote}
        </li>
        );
  }
  
}

export default FullNote;