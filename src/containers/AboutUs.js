import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import {BlurButton} from "../components/styled/buttons";
import {CounterContainer,CounterButton, CounterText} from "../components/styled/counterPage";
import * as aboutUsActions from '../actions/aboutUsActions'
import {connect} from "react-redux";
import * as counterActions from "../actions/CounterActions";


const mapStateToProps = (state) => {
    return {
        users: state.users.usersData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        aboutUsActions: bindActionCreators(aboutUsActions, dispatch)
    }
}

class AboutUs extends Component {


    constructor(props){
        super(props);
        this.onGetUsers = this.onGetUsers.bind(this);
        this.state = {
            usersData: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            usersData: nextProps.users || null
        });
    }

    onGetUsers() {
        this.props.aboutUsActions.getUsers()
    }

    render() {

        const {usersData} = this.state;
        const {users} = this.props;
        return (
            <div>
                <h1>About US</h1>
                <Link to='/'>
                    <BlurButton width='10%' fontSize='24px' padding="10px">Назад</BlurButton>
                </Link>

                <CounterContainer>
                    <CounterButton width="60px" description="Get users" onClick={() => this.onGetUsers()} iconType="person_add" color='white' classType="material-icons">
                    </CounterButton>
                    <CounterText width="100%">

                    </CounterText>
                    {
                        usersData !== null ?  <p>{usersData.name + ' ' + usersData.surname + ' ' + usersData.age + ' года(лет)'}</p> : 'Нет данных'
                    }
                </CounterContainer>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);

