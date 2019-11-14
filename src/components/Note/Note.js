import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Note.css'
import NoteContext from '../../NoteContext'
import config from '../../config'


class Note extends Component{
  static contextType = NoteContext;

  handleClickDelete = e => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/notes/${this.props.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok){
        console.log('not okay')
      }
    })
    .then(() => {
      this.context.deleteNote(this.props.id)
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
        return (
          <li className='note'>
            <Link to={`/notes/${this.props.id}`}>
              <h4>{this.props.name}</h4>
            </Link>
              <p>Last Modified on {this.props.modified}</p>
              <button onClick={this.handleClickDelete}>Delete</button>
          </li>
        );
  }
}

export default Note;

Note.propTypes = {
  data: PropTypes.object,
  handleDeleteNote: PropTypes.func,
  modified: PropTypes.string,
  name: PropTypes.string.isRequired
}