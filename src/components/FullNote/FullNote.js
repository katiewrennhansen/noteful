import React, { Component } from 'react';
import './FullNote.css'


class FullNote extends Component{
  render() {
        return (
        <li className='full-note'>
            <h2>{this.props.note.name}</h2>
            <p>Last Modified on {this.props.note.modified}</p>
            <p>{this.props.note.content}</p>
            <button>Delete</button>
        </li>
        );
  }
  
}

export default FullNote;