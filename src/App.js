import React, { Component } from 'react';
import { Switch, Route,Link, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import Counter from './containers/Counter'
import AboutUs from './containers/AboutUs'
import {BlurRouteButton} from './components/styled/buttons'
import {AppContainer,AppWrapper} from "./components/styled/appBlock";
import 'material-design-icons';
import {PrivateRouteAboutUs,PrivateRouteCounter,} from './protected_routes/routes'


class App extends Component {
  render() {
    return (
        <AppWrapper>
            <AppContainer>
                <BlurRouteButton iconType="home" classType="material-icons" to='/' description='Главная' fontSize='54px' padding="80px"></BlurRouteButton>
                <BlurRouteButton iconType='theaters' classType="material-icons" to='/aboutUs' description='Об игре' fontSize='54px' padding="80px"></BlurRouteButton>
                <BlurRouteButton iconType='add' classType="material-icons" to='/counter' description='Правила игры' fontSize='54px' padding="80px"></BlurRouteButton>
            </AppContainer>

            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <PrivateRouteAboutUs  path='/aboutUs' component={AboutUs}/>
                    <PrivateRouteCounter  path='/counter' component={Counter}/>
                </Switch>
            </main>
        </AppWrapper>
    );
  }
}

export default App;
