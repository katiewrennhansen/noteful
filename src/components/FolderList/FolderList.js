import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Folder from '../Folder/Folder'
import './FolderList.css'
import NoteContext from '../../NoteContext'

class FolderList extends Component {
    static contextType = NoteContext;
    render(){
        const contextFolders = this.context.folders;

        const folders = contextFolders.map(folder => {
            return (
                <li key={folder.id}>
                    <Link to={`/folder/${folder.id}`}>
                        <Folder 
                            name={folder.name}
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

