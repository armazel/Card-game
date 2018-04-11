import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'
import {WrapperContainer,CentralContainer} from "../components/styled/appBlock";
import {BlurButtonLogoutBlock,SoundToggleBlock,BlurButton} from "../components/styled/buttons";
import {Header} from "../components/styled/titleHeaders";
import { PulseLoader } from 'react-spinners';
import storage from '../utils/storage'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {BlurRouteButtonStarted} from '../components/styled/buttons'
import Sound from 'react-sound'
import {CounterText} from "../components/styled/counterPage";
import {IconNode} from "../components/styled/icon";
import * as visibleActions from "../actions/loaderActions";


const mapStateToProps = (state) => {
    return {
        auth: state.auth.authInfo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        visibleActions: bindActionCreators(visibleActions, dispatch),
    }
};

class GameArea extends Component {

    componentWillMount(){
        this.props.visibleActions.visibleRouteLine(false);
    }

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const {} = this.state;
        const {} = this.props;

        return (
            <WrapperContainer>
                <Header>Игра</Header>
            </WrapperContainer>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(GameArea);
