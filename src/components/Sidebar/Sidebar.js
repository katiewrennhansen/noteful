import React, { Component } from 'react';
import './Sidebar.css'
import FolderList from '../FolderList/FolderList'

class Sidebar extends Component {
    render(){
        return (
            <aside className='header'>
              <FolderList 
                folders={this.props}
                filterNotes={this.props.filterNotes}
              />
            </aside>
          );
    }
  
}

export default Sidebar;