import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="App-header">
                        <h1 className="App-title">Gallery of my life</h1>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </header>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
