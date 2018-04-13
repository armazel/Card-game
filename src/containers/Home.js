import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'
import {WrapperContainer,WrapperEmptyContainer,CentralContainer} from "../components/styled/appBlock";
import {BlurButtonLogoutBlock,SoundToggleBlock,BlurButton} from "../components/styled/buttons";
import {Header} from "../components/styled/titleHeaders";
import { PulseLoader } from 'react-spinners';
import storage from '../utils/storage'
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import * as openedModalsActions from "../actions/openedModals";
import * as visibleActions from "../actions/loaderActions";
import {bindActionCreators} from "redux";
import {BlurRouteButtonStarted} from '../components/styled/buttons'
import Sound from 'react-sound'
import {CounterText} from "../components/styled/counterPage";
import {IconNode} from "../components/styled/icon";
import ModalWindow from '../components/ModalUserInfo/ModalUserInfo'



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
        openedModalsActions: bindActionCreators(openedModalsActions, dispatch),
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
            visibleStartGameLoader: false,
            isOpenedModalUser:false
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

    openUserModal(){
        this.props.openedModalsActions.isOpenedUserModal(true);

    }

    componentDidMount(){
        this.getAuthInfo();
    }

    onLogout(){
        this.props.authActions.logout()
        this.setState({ visiblePreLoader: true });
        setTimeout(() => {
            this.setState({ visiblePreLoader: false });
            this.setState({ showComponent: false});
        }, 2000);
    }

    render() {
        const {showComponent,visiblePreLoader,visibleStartGameLoader,isOpenedModalUser} = this.state;
        const {auth} = this.props;

        return (
            <WrapperContainer>
                <CentralContainer>
                    <Header margin='0 0 50px 0' fontSize='56px'>Добро пожаловать {auth ? storage.login : ''}</Header>
                    {
                        auth ?
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
                        auth ?
                            <BlurButtonLogoutBlock >
                                <WrapperEmptyContainer onClick={()=> this.openUserModal()}>
                                    <IconNode fontSize='44px' iconType="person" classType="material-icons"></IconNode>
                                    <CounterText fontSize='34px'>{storage.login}</CounterText>
                                </WrapperEmptyContainer>
                            </BlurButtonLogoutBlock>
                            : null
                    }

                    {
                        !showComponent && !auth ?
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
                    <ModalWindow/>
                </CentralContainer>
            </WrapperContainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

