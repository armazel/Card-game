import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import {WrapperContainer} from "./styled/appBlock";
import {CounterContainer} from "./styled/counterPage";
import 'material-design-icons';

class Counter extends Component {

    mapDispatchToProps = dispatch => bindActionCreators({
        changePage: () => push('/about-us')
    }, dispatch)

    render() {
        return (
            <WrapperContainer>
                <CounterContainer>
                    <h1>Counter Page</h1>
                    fdshdfh
                </CounterContainer>
            </WrapperContainer>
        );
    }
}

export default Counter;

