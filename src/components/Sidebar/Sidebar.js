import React, { Component } from 'react';
import './Sidebar.css'
import FolderList from '../FolderList/FolderList'

class Sidebar extends Component {
    render(){
        return (
            <aside className='header'>
              <FolderList />
            </aside>
          );
    }
  
}

export default Sidebar;