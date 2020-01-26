import React, { Component } from 'react';
import setBackground from '../../_assets/js/styledOfPage.js';
import './About.css'

class Home extends Component {
    render() {
        setBackground(false);
        return (
            <div className="page">
                <h1>Hello World!</h1>
            </div>
        )
    }
}
export default Home;