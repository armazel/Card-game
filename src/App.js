import React, { Component } from 'react';
import { Switch, Route,Link, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import Counter from './containers/Counter'
import AboutUs from './containers/AboutUs'
import {BlurRouteButton} from './components/styled/buttons'
import {AppContainer} from "./components/styled/appBlock";
import 'material-design-icons';
import {PrivateRouteAboutUs,PrivateRouteCounter,} from './protected_routes/routes'


class App extends Component {
  render() {
    return (
        <div>
            <AppContainer>
                <BlurRouteButton iconType="home" classType="material-icons" to='/' description='Home' fontSize='54px' padding="80px"></BlurRouteButton>
                <BlurRouteButton iconType='track_changes' classType="material-icons" to='/aboutUs' description='About Us' fontSize='54px' padding="80px"></BlurRouteButton>
                <BlurRouteButton iconType='add' classType="material-icons" to='/counter' description='Counter' fontSize='54px' padding="80px"></BlurRouteButton>
            </AppContainer>

            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <PrivateRouteAboutUs  path='/aboutUs' component={AboutUs}/>
                    <PrivateRouteCounter  path='/counter' component={Counter}/>
                </Switch>
            </main>
        </div>
    );
  }
}

export default App;
