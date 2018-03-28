import style from 'styled-components'
import {BlurRouteButton,ButtonClick} from './buttons'


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
  &:hover{
    opacity: 1;
    cursor: pointer;
    color: white;
  }
`


export const CounterText = style.p.attrs({
    width: props => props.width || '10%',
})`
color:${props => props.color};
font-size: 18px;
margin: 0 10px;

`