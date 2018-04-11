import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'
import {WrapperContainer,CentralContainer} from "../components/styled/appBlock";
import {BlurButtonLogoutBlock,SoundToggleBlock,BlurButton} from "../components/styled/buttons";
import {Header} from "../components/styled/titleHeaders";
import { PulseLoader } from 'react-spinners';
import storage from '../utils/storage'
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import * as visibleActions from "../actions/loaderActions";
import {bindActionCreators} from "redux";
import {BlurRouteButtonStarted} from '../components/styled/buttons'
import Sound from 'react-sound'
import {CounterText} from "../components/styled/counterPage";
import {IconNode} from "../components/styled/icon";



//import some components with happend the loadable
const LoadableComponent = Loadable({
    loader: () => import('../components/LoginForm'),
    loading: Loading,
    delay: 300
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth.authInfo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
        visibleActions: bindActionCreators(visibleActions, dispatch),
    }
};

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            visiblePreLoader: false,
            loop: true,
            position: 0,
            playStatus: Sound.status.PLAYING,
            visibleStartGameLoader: false
        }
    }

    getAuthInfo() {
        this.props.authActions.authGetInfo()
    }

    startGameArea(){
        this.setState({ visibleStartGameLoader: true });
        setTimeout(() => {
            this.setState({ visibleStartGameLoader: false });
            this.props.history.push("/gameArea");
            this.props.visibleActions.visibleRouteLine(false);
        }, 2000);

    }

    onMouseClick = () => {
        this.getAuthInfo();
        this.setState({ visiblePreLoader: true });
        setTimeout(() => {
            this.setState({ visiblePreLoader: false });
            this.setState({ showComponent: true });
        }, 2000);

    };

    componentDidMount(){
        this.getAuthInfo();
    }

    onLogout(){
        storage.login = '';
        this.setState({ visiblePreLoader: true });
        setTimeout(() => {
            this.setState({ visiblePreLoader: false });
            this.setState({ showComponent: false});
        }, 2000);
    }

    render() {
        const {showComponent,visiblePreLoader,visibleStartGameLoader} = this.state;
        const {auth} = this.props;

        return (
            <WrapperContainer>
                <CentralContainer>
                    <Header margin='0 0 50px 0' fontSize='56px'>Добро пожаловать {storage.login.length ? storage.login : ''}</Header>
                    {
                        storage.login.length ?
                            <BlurRouteButtonStarted onClick={(e)=> this.startGameArea()} iconType="touch_app" classType="material-icons" width='30%' fontSize='54px' padding="80px">Играть</BlurRouteButtonStarted>
                            : null
                    }

                    <Header>
                        <PulseLoader
                            color={'white'}
                            loading={visibleStartGameLoader}
                        />
                    </Header>

                    {
                        storage.login.length ?
                            <BlurButtonLogoutBlock>
                                <IconNode iconType="person" classType="material-icons"></IconNode>
                                <CounterText fontSize='24px'>{storage.login}</CounterText>
                                <BlurButton width='100%' fontSize='24px' padding="30px" onClick={(e) => this.onLogout()}>Разлогиниться</BlurButton>
                            </BlurButtonLogoutBlock>
                            : null
                    }

                    {
                        !showComponent && !storage.login.length ?
                            <BlurButton width='10%' fontSize='24px' padding="30px" onClick={(e) => this.onMouseClick()}>Войти</BlurButton> : null

                    }

                    {
                        (showComponent && !auth) ? <LoadableComponent visible={auth}></LoadableComponent> : null
                    }


                    <Header>
                        <PulseLoader
                            color={'white'}
                            loading={visiblePreLoader}
                            onPlaying={true}
                        />
                    </Header>
                </CentralContainer>
            </WrapperContainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

