import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import {BlurButton} from "../components/styled/buttons";
import {CounterContainer,CounterButton, CounterText} from "../components/styled/counterPage";
import {WrapperContainer} from "../components/styled/appBlock";
import {Header,List,ListItem} from "../components/styled/titleHeaders";
import * as aboutUsActions from '../actions/aboutUsActions'
import * as loaderActions from '../actions/loaderActions'
import {connect} from "react-redux";
import { RingLoader } from 'react-spinners';


const mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
        loaderActive: state.loaders.activeLoaderFlag || null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        aboutUsActions: bindActionCreators(aboutUsActions, dispatch),
        loadersActive: bindActionCreators(loaderActions, dispatch)
    }
}

const UsersList = ({ line,index }) => {
    return (
        line ?  <ListItem fontSize="18px"><span>{index + ') '}</span>{line.name + ' ' + line.surname + ' ' + line.age + ' лет(года) ' + '(' + line.role + ')'}</ListItem> : null
    )
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
            //usersData: nextProps.users || null
        });
    }

    onGetUsers() {
        this.props.loadersActive.activeLoaderToggle(true);
        this.props.aboutUsActions.getUsers()
    }


    render() {
        const {users,loaderActive} = this.props;
        return (
            <div>
                <h1>About US</h1>
                <Link to='/'>
                    <BlurButton width='10%' fontSize='24px' padding="10px">Назад</BlurButton>
                </Link>

                <CounterContainer>
                    <CounterButton width="60px" description="О нашей команде" onClick={() => this.onGetUsers()} iconType="person_add" color='white' classType="material-icons">
                    </CounterButton>
                    <WrapperContainer padding="10px" margin="10px" width="100%">
                        <RingLoader
                            color={'rebeccapurple'}
                            loading={loaderActive}
                        />
                        {
                            !this.props.users && !loaderActive ?
                            <Header fontSize="20px">нет данных</Header> : null
                        }
                        <List>
                            {
                                this.props.users ?
                                    users.map((line, i) => {
                                        return line ? <UsersList index={i+1} line={line} key={i}/> : null;
                                    }) : null
                            }
                        </List>
                    </WrapperContainer>
                </CounterContainer>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);
