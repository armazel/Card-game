// @flow

import React, {Component} from 'react'
import {WrapperContainer} from "../components/styled/appBlock";
import {CounterContainer,CounterButton, CounterText} from "../components/styled/counterPage";
import {InputData,InputDataBlock} from "../components/styled/inputs";
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
};



class Counter extends Component {

    constructor(props){
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);

        this.state = {
            counterValue: 0
        };
    }

    square = (n:number)=>{
        return n;
    }

    onCounterAddClick() {
        this.props.counterActions.addCounter()
    }

    onCounterRemoveClick() {
        this.props.counterActions.removeCounter()
    }
    onCounterUpdate(event){

        this.setState({counterValue :event.target.value})
    }

    onCounterGetData(){
        this.props.counterActions.updateCounter(parseInt(this.state.counterValue))
    }

    render() {
        const { addCounter,removeCounter } = this.props.counterActions
        const { counterInfo } = this.props;
        return (
            <WrapperContainer>
                <CounterContainer>
                    <Header>Counter {this.square('zcvnczvn')}</Header>
                    <CounterButton onClick={() => this.onCounterRemoveClick()} iconType="exposure_neg_1" color='white' classType="material-icons"></CounterButton>
                    <CounterText>{counterInfo}</CounterText>
                    <CounterButton onClick={() => this.onCounterAddClick()} iconType="exposure_plus_1" color='white' classType="material-icons"></CounterButton>
                    <InputDataBlock>
                            <InputData value={this.state.counterValue} placeholder="Change count" iconType="edit" classType="material-icons" onChange={(e) => this.onCounterUpdate(e)}></InputData>
                        <CounterButton onClick={() => this.onCounterGetData(this.state.counterValue)} iconType="edit" color='white' classType="material-icons"></CounterButton>
                    </InputDataBlock>
                </CounterContainer>
            </WrapperContainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

