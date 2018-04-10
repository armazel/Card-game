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
import { Draggable, Droppable } from 'react-drag-and-drop'
import {List,ListItem} from "../components/styled/titleHeaders";


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

const UsersList = ({ line,index }) => {
    return (
        line ?  <ListItem fontSize="18px">{line.label}</ListItem> : null
    )
};


class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            dataItems: []
        };
    }

    onDrop(data) {
        let item = {
            label:data.label
        };
        this.setState({
            dataItems: [...this.state.dataItems, item]
        })
    }

    render() {
        const { dataItems } = this.state;
        return (
            <WrapperContainer>
                <div>
                    <ul>
                        <Draggable type="label" data="banana"><img style={{width:'140px', height:'240px', borderRadius:'10px'}} src="./aux_archers1.png" alt=""/></Draggable>
                        <Draggable type="label" data="apple"><li>Apple</li></Draggable>
                        <Draggable type="label" data="silver"><li>Silver</li></Draggable>
                    </ul>
                    <Droppable
                        types={['label']} // <= allowed drop types
                        onDrop={this.onDrop.bind(this)}>
                        <ul className="Smoothie">tr</ul>
                    </Droppable>
                    <List>
                        {
                            dataItems ?
                                dataItems.map((line, i) => {
                                    return line ? <UsersList index={i+1} line={line} key={i}/> : null;
                                }) : null
                        }
                    </List>
                </div>
            </WrapperContainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

