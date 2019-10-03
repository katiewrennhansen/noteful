import React, { Component } from 'react';
import './Folder.css'

class Folder extends Component {
    render(){
        return (
            <div className='folder'>
              <h3>{this.props.name}</h3>
            </div>
          );
    }
  
}

export default Folder;



