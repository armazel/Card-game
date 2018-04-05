import style from 'styled-components'
import * as React from 'react'


class InputBlock extends React.Component{

    render(){
        const{fontSize,value, className,onChange, placeholder, type} = this.props;
        return (
            <input placeholder={placeholder} onChange={onChange} className={className} type={type} fontSize={fontSize}  value={value}/>
        )
    }
}


export const InputData =  style(InputBlock).attrs({
    width:props=> props.width,
    fontSize:props => props.fontSize,
    type: props => props.type || 'text'
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




