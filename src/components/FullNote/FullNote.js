import React, { Component } from 'react';
import './FullNote.css'


class FullNote extends Component{
  render() {

        const displayNote = this.props.notes.map(note => {
          if (this.props.noteId === note.id){
            return (
              <div className='full-note' key={note.id}>
                <h2>{note.name}</h2>
                <p>Last Modified on {note.modified}</p>
                <p>{note.content}</p>
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