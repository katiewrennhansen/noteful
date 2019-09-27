import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AddFolder from './components/AddFolder/AddFolder'
import AddNote from './components/AddNote/AddNote'
import NoteList from './components/NoteList/NoteList'
import FullNote from './components/FullNote/FullNote'

class App extends Component{

  // filterNotes(){
  //     const folders = this.props.listItems.folders.filter(folder => {
  //       if (this.props.listItems.notes.includes(folder.id)){
  //         console.log('includes')
  //       }
  //       })
  // }
  // filterNotes(){
  //   console.log(this.props.history.pathname.location)
  // }


  render() {

    return (
      <div className='App'>
        <Header />
        
        <Switch>
          <Route 
            exact path='/'
            render={() => {
                return (
                <div>
                  <Sidebar 
                    folders={this.props}
                    filterNotes={this.filterNotes}
                  >
                  </Sidebar>
                  
                  <NoteList 
                    notes={this.props.listItems.notes}
                    folders={this.props.listItems.folders}
                  >
                  </NoteList>
          
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
            render={() => 
              <FullNote 
                note={this.props.listItems.notes[0]}
              />
            }
          />
          <Route 
            path='/folder/:id'
            render={(history) => {
              const id = history.match.params.id;
              console.log(id)
              return (
              <div>
                <Sidebar 
                  folders={this.props}
                  filterNotes={this.filterNotes}
                />

                <NoteList 
                  notes={this.props.listItems.notes}
                  folders={this.props.listItems.folders}
                  folderId={id}

                />
              </div>
              )}}
          />
        </Switch>

      </div>
    );
  }
  
}

export default App;