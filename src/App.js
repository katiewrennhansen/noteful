import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AddFolder from './components/AddFolder/AddFolder'
import AddNote from './components/AddNote/AddNote'
import NoteList from './components/NoteList/NoteList'
import FullNote from './components/FullNote/FullNote'
import NoteContext from './NoteContext'
import config from './config'


class App extends Component{
  state = {
    folders: [],
    notes: []
  }

  componentDidMount(){
    //call API for folders data
    fetch(`${config.API_ENDPOINT}/folders`)
    .then(res => {
      if(!res.ok){
        console.log('not okay')
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        folders: data
      })
    })
    .catch(err => {
      console.log(err)
    })
    
    //call API for notes data
    fetch(`${config.API_ENDPOINT}/notes`)
    .then(res => {
      if(!res.ok){
        console.log('not okay')
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        notes: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteNote = noteId => {
      const newList = this.state.notes.filter(note => {
        return note.id !== noteId
      })
      this.setState({
        notes: newList
      })
  }


  render() {
    const contextValue = {
      folders: this.state.folders,
      
      notes: this.state.notes,
      deleteNote: this.deleteNote,
    }
    return (
      <div className='App'>
        <NoteContext.Provider value={contextValue}>
          <Header />
          
          <Switch>
            <Route 
              exact path='/'
              render={() => {
                  return (
                  <div>
                    <Sidebar />
                    <NoteList />
                  </div>
                  )
                }}
              />
            <Route 
              path='/add-folder'
              render={() => 
                <div>
                  <AddFolder />
                </div>
              }
            />
            {/* need to combine this and above routes - still need to figure out how */}
            <Route 
              path='/folder/add-folder'
              render={() => 
                <div>
                  <AddFolder />
                </div>
              }
            />
            <Route 
              path='/add-note'
              render={() => 
                <div>
                  <AddNote />
                </div>
              }
            />
            <Route 
              path='/note/:id'
              render={(history) => {
                const noteId = history.match.params.id;
                return (
                  <FullNote 
                    noteId={noteId}
                  />
                )
              }
                
              }
            />
            <Route 
              path='/folder/:id'
              render={(history) => {
                const id = history.match.params.id;
                return (
                <div>
                  <Sidebar />
                  <NoteList
                    folderId={id}
                  />
                </div>
                )}}
            />
          </Switch>
        </NoteContext.Provider>
      </div>
    );
  }
  
}

export default App;