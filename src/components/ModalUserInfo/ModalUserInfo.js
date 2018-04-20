import React, {Component} from 'react'
import '../../utils/stringMethods';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Modal from 'react-modal';
import * as openedModalsActions from "../../actions/openedModals";
import {ModalHeaderBlock,AroundAreaBlock,ModalBodyBlock,ModalBlock} from "./styled/modalUserInfo";
import storage from '../../utils/storage'
import {Header} from "../styled/titleHeaders";
import {IconNode} from "../styled/icon";
import {CounterText} from "../styled/counterPage";
import {BlurButton} from "../styled/buttons";
import * as authActions from "../../actions/authActions";
import Sound from "react-sound";
import { PulseLoader } from 'react-spinners';
import {CloseCrossBlock} from "./styled/modalUserInfo";


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        position              : 'relative',
        width                 : '70%',
        margin                : '0',
        padding               : '0',
        backgroundColor                : 'rgba(0, 0, 0, 0.25)',
        transform             : 'translate(-50%, -50%)',
    }
};

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.55)';


const mapDispatchToProps = (dispatch) => {
    return {
        openedModalsActions: bindActionCreators(openedModalsActions, dispatch),
        authActions: bindActionCreators(authActions, dispatch),
    }
};

const mapStateToProps = (state) => {

    return {
        isOpenedModalUser: state.openModals.isOpenedUserModal,
        auth: state.auth.authInfo
    }
};

class ModalWindow extends Component {

    constructor(props){
        super(props);


        this.state = {
            visiblePreLoader: false
        };
    }

    onLogout(){
        this.setState({ visiblePreLoader: true });
        setTimeout(() => {
            this.setState({ visiblePreLoader: false });
            this.props.openedModalsActions.isOpenedUserModal(false);
            this.props.authActions.logout();
        }, 2000);
    }

    closeModal() {
        this.props.openedModalsActions.isOpenedUserModal(false);
    }

    render() {
        const {isOpenedModalUser,auth,userName} = this.props;
        const {visiblePreLoader} = this.state;


        return (
            <Modal
                ariaHideApp = {false}
                isOpen={isOpenedModalUser && auth}
                onRequestClose={() => this.closeModal()}
                style={customStyles}
                contentLabel="Информация о пользователе"
            >
                <ModalHeaderBlock>
                    <Header>Информация о пользователе</Header>
                    <CloseCrossBlock onClick={()=>this.closeModal()}>
                        <IconNode color='white' fontSize='34px' iconType="clear" classType="material-icons"></IconNode>
                    </CloseCrossBlock>
                </ModalHeaderBlock>
                <ModalBodyBlock>
                    <ModalBlock>
                            <IconNode color='#0e7c5e' fontSize='84px' iconType="account_circle" classType="material-icons"></IconNode>
                    </ModalBlock>
                    <ModalBlock>
                        <CounterText color='gray' fontSize='40px'>
                            {userName ? userName : ''}
                        </CounterText>
                        <CounterText color='gray' fontSize='40px'>
                            ранг 36
                        </CounterText>
                    </ModalBlock>
                    <ModalBlock>
                        <BlurButton width='30%' fontSize='24px' padding="30px" onClick={(e) => this.onLogout()}>Разлогиниться</BlurButton>
                    </ModalBlock>
                    <ModalBlock>
                        <PulseLoader
                            color={'gray'}
                            loading={visiblePreLoader}
                            onPlaying={true}
                        />
                    </ModalBlock>
                </ModalBodyBlock>
            </Modal>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow);