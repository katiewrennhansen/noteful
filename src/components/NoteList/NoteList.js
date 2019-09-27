import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './NoteList.css'
import Note from '../Note/Note'
import AddFolder from '../AddFolder/AddFolder';


class NoteList extends Component{
  render() {
        const notes = this.props.notes.map(note => {
            return (
                <div key={note.id}>
                <Note 
                    data={note}
                    name={note.name}
                    modified={note.modified}
                />
                </div>
            )
           
        })
        console.log(notes);
        console.log(this.props);

        return (
        <main className='header'>
            <div className='note-list'>
                <ul>
                    {notes}
                </ul>

                
                <Route
                    path='/folder/b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1'
                    render={() =>
                        <AddFolder />
                    }
                />
                

                <Link to='add-note'>
                    <button>Add Note</button>
                </Link>
            </div>
            
        </main>
        );
  }
  
}

export default NoteList;