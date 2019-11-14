import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AddFolder from './components/AddFolder/AddFolder'
import AddNote from './components/AddNote/AddNote'
import NoteList from './components/NoteList/NoteList'
import FullNote from './components/FullNote/FullNote'
import NoteContext from './NoteContext'
import FolderError from './errorBoundaries/FolderError'
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
      this.props.history.push('/');
  }


  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      history: this.props.history
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
                    <FolderError>
                      <Sidebar />
                    </FolderError>
                    <NoteList />
                  </div>
                  )
                }}
              />
            <Route 
              path='/add-folder'
              render={() => 
                <div>
                  <AddFolder 
                    history={this.props.history}
                  />
                </div>
              }
            />
            {/* need to combine this and above routes - still need to figure out how */}
            <Route 
              path='/folders/add-folder'
              render={() => 
                <div>
                  <AddFolder 
                    history={this.props.history}
                  />
                </div>
              }
            />
            <Route 
              path='/add-note'
              render={() => 
                <div>
                  <AddNote 
                    history={this.props.history}                  
                  />
                </div>
              }
            />
            <Route 
              path='/notes/:id'
              render={(history) => {
                const noteId = history.match.params.id;
                return (
                  <FullNote 
                    noteId={noteId}
                    history={this.props.history}
                  />
                )
              }}
            />
            <Route 
              path='/folders/:id'
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

export default withRouter(App);