import React, { Component } from 'react';
import './FullNote.css'


class FullNote extends Component{
  render() {
        return (
        <li className='note'>
            <h4>{this.props.name}</h4>
            <p>Last Modified on {this.props.modified}</p>
            <button>Delete</button>
        </li>
        );
  }
  
}

export default FullNote;