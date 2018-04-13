import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route,Link, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import Counter from './containers/Counter'
import GameArea from './containers/GameArea'
import AboutUs from './containers/AboutUs'
import {BlurRouteButton} from './components/styled/buttons'
import {AppContainer,AppWrapper} from "./components/styled/appBlock";
import 'material-design-icons';
import {PrivateRouteAboutUs,PrivateRouteCounter,} from './protected_routes/routes'
import storage from "./utils/storage";
import Sound from "react-sound";
import {SoundToggleBlock} from "./components/styled/buttons";
import {IconNode} from "./components/styled/icon";
import {connect} from "react-redux";
import loaders from "./reducers/loaders";
import {WrapperEmptyContainer} from "./components/styled/appBlock";


const mapStateToProps = (state) => {
    return {
        visibleRouteLine: state.loaders.visibleRouteLine
    }
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            visiblePreLoader: false,
            loop: false,
            position: 0,
            playStatus: Sound.status.STOPPED
        }
    }


  render() {
      const {playStatus,loop} = this.state;
      const {visibleRouteLine} = this.props;

    return (
        <AppWrapper>
            <Router>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <PrivateRouteAboutUs path='/aboutUs' component={AboutUs}/>
                        <PrivateRouteCounter path='/counter' component={Counter}/>
                        <PrivateRouteCounter path='/gameArea' component={GameArea}/>
                    </Switch>
                    {
                        visibleRouteLine ?
                            <AppContainer>
                                <BlurRouteButton iconType="home" classType="material-icons" to='/' description='Главная' fontSize='54px' padding="80px"></BlurRouteButton>
                                <BlurRouteButton iconType='theaters' classType="material-icons" to='/aboutUs' description='Об игре' fontSize='54px' padding="80px"></BlurRouteButton>
                                <BlurRouteButton iconType='add' classType="material-icons" to='/counter' description='Правила игры' fontSize='54px' padding="80px"></BlurRouteButton>
                            </AppContainer> : null
                    }
                </main>

            </Router>
            {
                storage.login.length ?
                    <WrapperEmptyContainer>
                        <Sound
                            url="https://psv4.vkuseraudio.net/c422130/u230012738/audios/c0dd05a22bcd.mp3?"
                            playStatus={this.state.playStatus}
                            loop={loop}
                            playFromPosition={this.state.position}
                            onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
                        />
                    </WrapperEmptyContainer>
                   : null
            }
            {
                storage.login.length ?
                    <SoundToggleBlock onClick={() => this.setState({ playStatus: this.state.playStatus === 'PLAYING' ? Sound.status.PAUSED :  Sound.status.PLAYING})}>
                        {
                            playStatus === 'PLAYING' ? <IconNode fontSize='40px' iconType="mic" classType="material-icons" >pause</IconNode> :
                                <IconNode iconType="mic_none" fontSize='40px' classType="material-icons">pause</IconNode>
                        }

                    </SoundToggleBlock>: null
            }
        </AppWrapper>
    );
  }
}

export default connect(mapStateToProps)(App);
