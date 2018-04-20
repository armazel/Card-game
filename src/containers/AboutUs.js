import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import {BlurButton} from "../components/styled/buttons";
import {CounterContainer,CounterButton, CounterText} from "../components/styled/counterPage";
import {WrapperContainer,CentralContainer,WrapperBlockVideo} from "../components/styled/appBlock";
import {Header,List,ListItem} from "../components/styled/titleHeaders";
import * as aboutUsActions from '../actions/aboutUsActions'
import * as loaderActions from '../actions/loaderActions'
import {connect} from "react-redux";
import { RingLoader } from 'react-spinners';
import storage from "../utils/storage";


const mapStateToProps = (state) => {

    return {
        users: state.users.usersData,
        loaderActive: state.loaders.activeLoaderFlag || null,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        aboutUsActions: bindActionCreators(aboutUsActions, dispatch),
        loadersActive: bindActionCreators(loaderActions, dispatch)
    }
};

const UsersList = ({ line,index }) => {
    return (
        line ?  <ListItem fontSize="18px"><span>{index + ') '}</span>{line.name + ' ' + line.surname + ' ' + line.age + ' лет(года) ' + '(' + line.role + ')'}</ListItem> : null
    )
};


class AboutUs extends Component {


    constructor(props){
        super(props);
        this.onGetUsers = this.onGetUsers.bind(this);
        this.state = {
            usersData: null
        }
    }

    onGetUsers() {
        this.props.aboutUsActions.getUsers()
    }


    render() {
        const {users,loaderActive,total} = this.props;
        return (
            <div>

                <CounterContainer>
                    <WrapperContainer>
                        <CentralContainer margin='60px 0 0 0'>
                            <Header  fontSize='56px'>Об игре</Header>
                            <CounterContainer>
                                <CounterText fontSize='24px'>Интересная игра для оттачивания навыков и дальнейшем развитии во вселенной Гвинт</CounterText>
                                <CounterText fontSize='24px'>С уважением, команда разработчиков)</CounterText>
                            </CounterContainer>

                            <WrapperBlockVideo>
                                <iframe width="70%" src="https://www.youtube.com/embed/QKwJq_odG70"></iframe>
                            </WrapperBlockVideo>

                        </CentralContainer>
                    </WrapperContainer>

                </CounterContainer>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);

