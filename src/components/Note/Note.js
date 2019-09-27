import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Note.css'


class Note extends Component{
  render() {
        return (
        <li className='note'>
          <Link to={`/note/${this.props.data.id}`}>
            <h4>{this.props.name}</h4>
          </Link>
            <p>Last Modified on {this.props.modified}</p>
            <button>Delete</button>
        </li>
        );
  }
  
}

export default Note;