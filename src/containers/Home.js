import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'
import {WrapperContainer,CentralContainer} from "../components/styled/appBlock";
import {BlurButton} from "../components/styled/buttons";
import {Header} from "../components/styled/titleHeaders";
import { PulseLoader } from 'react-spinners';
import storage from '../utils/storage'
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import {bindActionCreators} from "redux";


//import some components with happend the loadable
const LoadableComponent = Loadable({
    loader: () => import('../components/LoginForm'),
    loading: Loading,
    delay: 300
});



const mapStateToProps = (state) => {
    return {
        auth: state.auth.authInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    }
};

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            visiblePreLoader: false
        }
    }

    getAuthInfo() {
        this.props.authActions.authGetInfo()
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
        const {showComponent,visiblePreLoader} = this.state;
        const {auth} = this.props;

        return (
            <WrapperContainer>
                <CentralContainer>
                    <Header margin='0 0 50px 0' fontSize='56px'>Добро пожаловать {storage.login.length ? storage.login : ''}</Header>
                    {
                        storage.login.length ? <BlurButton width='10%' fontSize='24px' padding="30px" onClick={(e) => this.onLogout()}>Разлогиниться</BlurButton> : null
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
                        />
                    </Header>
                </CentralContainer>
            </WrapperContainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

