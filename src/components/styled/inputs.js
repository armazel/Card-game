import style from 'styled-components'
import * as React from 'react'
import {IconNode} from "./icon";


class InputBlock extends React.Component{

    render(){
        const{fontSize,value, className,onChange} = this.props;
        return (
            <input onChange={onChange} className={className} type="text" fontSize={fontSize}  value={value}/>
        )
    }
}


export const InputData =  style(InputBlock).attrs({
    width:props=> props.width,
    fontSize:props => props.fontSize
})`
  padding: 5px 20px;
  box-shadow: 1px 1px 1px deepskyblue;
  width:${props=>props.width};
  font-size: ${props=>props.fontSize};
  transition: all .5s ease;
  border-radius: 2px;
  outline: none;
  &:hover{
    box-shadow: 5px 5px 5px darkslateblue;
    cursor: pointer;
  }
`

export const InputDataBlock =  style.div.attrs({
    width:props=> props.width,
    fontSize:props => props.fontSize
})`
  width: 100%;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
`




