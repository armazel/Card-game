import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route,Link, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import Counter from './containers/Counter'
import TestPage from './containers/TestPage'
import GameArea from './containers/GameArea'
import AboutUs from './containers/AboutUs'
import {BlurRouteButton} from './components/styled/buttons'
import {AppContainer,AppWrapper} from "./components/styled/appBlock";
import 'material-design-icons';
import {PrivateRouteAboutUs,PrivateRouteCounter,} from './protected_routes/routes'
import Sound from "react-sound";
import {SoundToggleBlock} from "./components/styled/buttons";
import {IconNode,IconBurgerMenu,IconCloseMenu} from "./components/styled/icon";
import {connect} from "react-redux";
import {WrapperEmptyContainer,WrapperBlock} from "./components/styled/appBlock";
import * as visibleActions from "./actions/loaderActions";
import {bindActionCreators} from "redux";
import * as authActions from "./actions/authActions";


const mapStateToProps = (state) => {
    return {
        visibleRouteLine: state.loaders.visibleRouteLine,
        auth: state.auth.authInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        visibleActions: bindActionCreators(visibleActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),
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
            visible: false,
            playStatus: Sound.status.STOPPED
        }
    }

    componentDidMount(){
        this.props.authActions.authGetInfo();
    }

    visibleBar(){
        this.setState({visible: !this.state.visible})
    }

    render() {
      const {playStatus,loop,visible} = this.state;
      const {visibleRouteLine,auth} = this.props;

    return (
        <AppWrapper>
            <Router>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <PrivateRouteAboutUs path='/aboutUs' component={AboutUs}/>
                        <PrivateRouteCounter path='/counter' component={Counter}/>
                        <PrivateRouteCounter path='/gameArea' component={GameArea}/>
                        <PrivateRouteCounter path='/testPage' component={TestPage}/>
                    </Switch>
                    {visibleRouteLine && auth && <IconBurgerMenu onClick={()=>this.visibleBar()} fontSize='40px' iconType="sort" classType="material-icons"></IconBurgerMenu>}
                    {
                        visibleRouteLine && auth ?
                            <AppContainer visible={visible ? 1 : 0}>
                                <IconCloseMenu visible={visible ? 1 : 0} onClick={()=>this.visibleBar()} fontSize='40px' iconType="clear" classType="material-icons"></IconCloseMenu>
                                    <BlurRouteButton onClick={()=>visible && this.visibleBar()} iconType="home" classType="material-icons" to='/' description='Главная' fontSize='54px' padding="80px"></BlurRouteButton>
                                    <BlurRouteButton onClick={()=>visible && this.visibleBar()} iconType='theaters' classType="material-icons" to='/aboutUs' description='Об игре' fontSize='54px' padding="80px"></BlurRouteButton>
                                    <BlurRouteButton onClick={()=>visible && this.visibleBar()} iconType='person' classType="material-icons" to='/counter' description='Пользователи' fontSize='54px' padding="80px"></BlurRouteButton>
                            </AppContainer> : null
                    }
                </main>

            </Router>
            {
                auth ?
                    <WrapperEmptyContainer>
                        <Sound
                            url="https://cs9-7v4.vkuseraudio.net/p18/87718568dab6bb.mp3"
                            playStatus={this.state.playStatus}
                            loop={loop}
                            playFromPosition={this.state.position}
                            onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
                        />
                    </WrapperEmptyContainer>
                   : null
            }
            {
                auth ?
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
