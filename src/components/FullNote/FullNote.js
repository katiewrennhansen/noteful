import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import './FullNote.css'
import NoteContext from '../../NoteContext'
import config from '../../config'

class FullNote extends Component{
  static contextType = NoteContext

  handleClickDelete = e => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/notes/${this.props.noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok){
        console.log('not okay')
      }
    })
    .then(() => {
      this.context.deleteNote(this.props.noteId)
    })
    .catch(err => {
      console.log(err)
    })
    this.props.history.push('/');      
  }

  render() {
        const contextNotes = this.context.notes;
        const displayNote = contextNotes.map(note => {
          if (this.props.noteId == note.id){
            return (
              <div className='full-note' key={note.id}>
                <h2>{note.title}</h2>
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