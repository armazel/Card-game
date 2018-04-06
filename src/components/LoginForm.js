import React, {Component} from 'react'
import {Header} from "../components/styled/titleHeaders";
import {LoginWrapper,InputLoginWrapper} from "./styled/LoginForm";
import {BlurButton} from "./styled/buttons";
import {InputDataBlock,InputData} from "./styled/inputs";
import {CounterText} from "./styled/counterPage";
import storage from '../utils/storage'
import '../utils/stringMethods';
import { RingLoader } from 'react-spinners';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import {bindActionCreators} from "redux";


const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    }
};

const mapStateToProps = (state) => {

    return {}
};

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);

        this.state = {
            login: '',
            password: '',
            visiblePreLoader: false
        };
    }

    getAuthInfo() {
        this.props.authActions.authGetInfo()
    }

    onCounterUpdate(event, type){
        this.setState({[type] :event.target.value})
    }

    onLogin(login,password){
        storage.login = (login.length && password.length) && login;
        this.setState({ visiblePreLoader: true });
        setTimeout(() => {
            this.setState({ visiblePreLoader: false });
            this.getAuthInfo();
        }, 2000);
    }

    render() {
        const {userName} = this.props;
        const {login,password,visiblePreLoader} = this.state;
        return (
            <LoginWrapper width='50%'>
                <Header width='100%'>Авторизация пользователя {userName}</Header>
                <InputLoginWrapper>
                    <InputDataBlock width="100%">
                        <InputData value={storage.login.length ? storage.login : login}
                                   onChange={(e) => this.onCounterUpdate(e, 'login')} name='login' type='text'
                                   placeholder="Your login" iconType="edit" classType="material-icons"></InputData>
                    </InputDataBlock>
                    <InputDataBlock width="100%">
                        <InputData onChange={(e) => this.onCounterUpdate(e, 'password')} name='password' type='password'
                                   placeholder="Password" iconType="edit" classType="material-icons"></InputData>
                    </InputDataBlock>
                    <InputDataBlock width="100%">
                        <BlurButton width='50%' fontSize='24px' padding="30px"
                                    onClick={(e) => this.onLogin(login, password)}>Войти</BlurButton> :
                    </InputDataBlock>
                    <Header width='100%'>Авторизационные данные:</Header>
                    <CounterText width="100%">
                        {
                            login ? 'Логин пользователя: ' + login
                                : 'Логин пользователя: .....'
                        }
                    </CounterText>
                    <CounterText width="100%">
                        {
                            password ? 'Пароль пользователя: ' + password.replacePassword('*')
                                : 'Пароль пользователя: .....'
                        }
                    </CounterText>
                    <Header>
                        <RingLoader
                            color={'rebeccapurple'}
                            loading={visiblePreLoader}
                        />
                    </Header>
                </InputLoginWrapper>
            </LoginWrapper>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);