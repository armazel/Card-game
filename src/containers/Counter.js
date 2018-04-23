import React, {Component} from 'react'
import {WrapperContainer,WrapperInfoContent,WrapperScrolledList} from "../components/styled/appBlock";
import {CounterContainer,CounterButton, CounterText} from "../components/styled/counterPage";
import {InputData,InputDataBlock} from "../components/styled/inputs";
import {Header} from "../components/styled/titleHeaders";
import 'material-design-icons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../actions/CounterActions'
import { Draggable, Droppable } from 'react-drag-and-drop'
import {ListData,ListItem} from "../components/styled/titleHeaders";
import generateData from '../utils/generateData';

import CardContentBlock from '../components/CardContent/index'

import {List,AutoSizer,Grid} from 'react-virtualized'



const mapStateToProps = (state) => {

    return {
        counterInfo: state.counter.counterInfo,
        userInfo: state.users.usersData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterActions: bindActionCreators(counterActions, dispatch)
    }
};

const UsersList = ({ line,index }) => {
    return (
        line ?  <ListItem fontSize="18px">{line.name + ' ' + line.surname + ' :' + line.age + ' лет' }</ListItem> : null
    )
};

const DroggableList = ({ line,index }) => {
    return (
        line ?  <ListItem fontSize="18px">{line.label}</ListItem> : null
    )
};

const listData = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125]
];



class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            dataItems: [],
            data: generateData(1000)
        };
    }

    componentDidMount(){
        this.props.counterActions.getUsersData();
    }

    onDrop(data) {
        let item = {
            label:data.label
        };
        this.setState({
            dataItems: [...this.state.dataItems, item]
        })
    }

    renderRow = ({index,isScrolling,key,style}) =>

        (
            <CardContentBlock key={key} style={style}
                              email={this.state.data[index].email}
                              name={this.state.data[index].name}
                              amount={this.state.data[index].amountCount}
                              text={this.state.data[index].text}
                              imageURL={this.state.data[index].imageUrl}/>
        );


    cellRender =({columnIndex,key,rowIndex,style}) => (
        <div
            key={key}
            style={style}
            >
            {listData[rowIndex][columnIndex]}
        </div>
    )



    render() {
        const { data } = this.state;
        const {  } = this.props;

        return (
            <WrapperContainer>
                <WrapperInfoContent width='350px'>
                    <CounterText width='100%' fontSize='54px'>Наши игроки</CounterText>

                    <AutoSizer>
                        {
                            ({width,height}) =>{
                                return (
                                    <List
                                        width={width}
                                        height={height}
                                        rowCount={data.length}
                                        rowHeight={420}

                                        overscanRowCount={5}
                                        scrollToAlignment='start'
                                        rowRenderer={this.renderRow}
                                    />
                                )
                            }
                        }
                    </AutoSizer>

                   {/* <Grid
                        cellRenderer={this.cellRender}
                        columnCount={5}
                        columnWidth={100}
                        height={300}
                        rowCount={5}
                        rowHeight={30}
                        width={300}
                    />*/}


                </WrapperInfoContent>
            </WrapperContainer>

        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

