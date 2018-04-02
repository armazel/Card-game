import style from 'styled-components'
import {ButtonClick} from './buttons'


export const CounterContainer = style.div.attrs({
    width: props => props.width || '100%'

}) `
    width: 100%;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`


export const CounterButton = style(ButtonClick).attrs({
    padding: props => props.padding || '20px',
    width:props => props.width || '10%'
})`
  background: green;
  opacity: 0.7;
  transition: all 0.5s ease;
  outline: none;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover{
    opacity: 1;
    cursor: pointer;
    color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`


export const CounterText = style.span.attrs({
    width: props => props.width || '60px',
    padding: props => props.padding,
    margin: props => props.margin
})`
color:${props => props.color};
font-size: 18px;
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;
margin: ${props=> props.margin};
padding: ${props => props.padding};
width: ${props=> props.width};

`
