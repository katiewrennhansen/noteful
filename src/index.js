import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';
import store from './store'

ReactDOM.render(
    <BrowserRouter>
        <App listItems={store} />
    </BrowserRouter>,
document.getElementById('root'));