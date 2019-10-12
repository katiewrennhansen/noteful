import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './NoteList.css'
import Note from '../Note/Note'
import NoteContext from '../../NoteContext'


class NoteList extends Component{

    static contextType = NoteContext;
   
  

  render() {
      const contextNotes = this.context.notes;
        const notes = contextNotes.map(note => {
            if (!this.props.folderId) {
                return (
                    <Fragment key={note.id}>
                    <Note 
                        id={note.id}
                        data={note}
                        name={note.name}
                        modified={note.modified}
                        handleDeleteNote={this.handleDeleteNote}
                    />
                    </Fragment>
                )
            } else if (note.folderId === this.props.folderId) {
                return (
                    <Fragment key={note.id}>
                    <Note 
                        data={note}
                        name={note.name}
                        modified={note.modified}
                        handleDeleteNote={this.handleDeleteNote}
                    />
                    </Fragment>
                )
            } 
        })
        
        return (
        <main className='main'>
            <div className='note-list'>
                <ul>
                    {notes}
                </ul>

                <Link to='/add-note'>
                    <button>Add Note</button>
                </Link>
            </div>
            
        </main>
        );
  }
  
}

export default NoteList;