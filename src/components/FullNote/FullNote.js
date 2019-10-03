import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import './FullNote.css'
import NoteContext from '../../NoteContext'


class FullNote extends Component{
  static contextType = NoteContext

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
                <button>Delete</button>
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