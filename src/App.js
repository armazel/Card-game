import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import { ConnectedRouter } from 'react-router-redux';

class App extends Component {
  render() {
    return (
        <div>
            {/*<header>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                    </ul>
                </nav>
            </header>*/}
            <main>
                <Switch>
                    <Route exact path='/home' component={Home}/>
                </Switch>
            </main>
        </div>
    );
  }
}

export default App;
