import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AddFolder from './components/AddFolder/AddFolder'
import AddNote from './components/AddNote/AddNote'
import NoteList from './components/NoteList/NoteList'

class App extends Component{

  // filterNotes(){
  //     const folders = this.props.listItems.folders.filter(folder => {
  //       if (this.props.listItems.notes.includes(folder.id)){
  //         console.log('includes')
  //       }
  //       })
  // }
  // filterNotes(){
  //   console.log('clicked')
  // }

  render() {


    return (
      <div className='App'>
        <Header />
        
        <Switch>
          <Route 
            exact path='/'
            render={(props) =>
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
              }
            />
          <Route 
            path='/add-folder'
            render={(props) => 
              <div>
                <AddFolder />
              </div>
            }
          />
          <Route 
            path='/add-note'
            render={(props) => 
              <div>
                <AddNote />
              </div>
            }
          />
        </Switch>
      </div>
    );
  }
  
}

export default App;