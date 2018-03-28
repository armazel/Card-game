import React, {Component} from 'react'
import {WrapperContainer} from "../components/styled/appBlock";
import {CounterContainer,CounterButton, CounterText} from "../components/styled/counterPage";
import {Header} from "../components/styled/titleHeaders";
import 'material-design-icons';
import { connect } from 'react-redux'
import counter from "../reducers/counter";
import { bindActionCreators } from 'redux'
import * as counterActions from '../actions/CounterActions'



const mapStateToProps = (state) => {
    return {
        counterInfo: state.counter.counterInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterActions: bindActionCreators(counterActions, dispatch)
    }
}


class Counter extends Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onCounterAddClick() {
        this.props.counterActions.addCounter()
    }

    onCounterRemoveClick() {
        this.props.counterActions.removeCounter()
    }

    render() {
        const { addCounter,removeCounter } = this.props.counterActions
        const { counterInfo } = this.props;
        return (
            <WrapperContainer>
                <CounterContainer>
                    <Header>Counter</Header>
                    <CounterButton onClick={() => this.onCounterRemoveClick()} iconType="exposure_neg_1" color='white' classType="material-icons"></CounterButton>
                    <CounterText width="20px">{counterInfo}</CounterText>
                    <CounterButton onClick={() => this.onCounterAddClick()} iconType="exposure_plus_1" color='white' classType="material-icons"></CounterButton>
                </CounterContainer>
            </WrapperContainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

