import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './view/App';


ReactDOM.render(
    <Router>
        <Route path='/' component={App}></Route>
    </Router>,
    document.getElementById('root')
    );