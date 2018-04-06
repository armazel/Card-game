import style from 'styled-components'
import {ButtonClick} from './buttons'
import fontGwent from '../../fonts/Chronicles_font.ttf'


export const CounterContainer = style.div.attrs({
    width: props => props.width || '100%'

}) `
    width: 100%;
    background: transparent;
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
        width: props => props.width,
        padding: props => props.padding,
        margin: props => props.margin || '10px',
        fontSize: props => props.fontSize
    })`
    color:${props => props.color};
    display: flex;
    flex-wrap: wrap;
    color: white;
    width: 100%;
    background: transparent;
    justify-content: center;
    font-size: ${props => props.fontSize};
    align-items: center;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    font-family: 'Gwent';
      @font-face {
        font-family: 'Gwent';
        src: url(${fontGwent});
      }
    `
