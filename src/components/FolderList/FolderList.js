import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Folder from '../Folder/Folder'
import './FolderList.css'

class FolderList extends Component {
    render(){
        const folders = this.props.folders.folders.listItems.folders.map(folder => {
            return (
                <li key={folder.id}>
                    <Link to={`/folder/${folder.id}`}>
                        <Folder 
                            name={folder.name}
                            filterNotes={this.props.filterNotes}
                        />
                    </Link>
                </li>
            )
        })

        return (
            <div className='folder-list'>
              <ul>
                  {folders}
              </ul>
                  <Link to='add-folder'>
                    <button>Add Folder</button>
                  </Link>
            </div>
          );
    }
  
}

export default FolderList;

