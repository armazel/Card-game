import style from 'styled-components'
import {Link} from 'react-router-dom'
import * as React from 'react'
import {IconNode} from "./icon";

export class LinkBlock extends React.Component {

    render() {
        const { to,description,classType, iconType, fontSize } = this.props;
        return <Link className={this.props.className} to={to}><IconNode classType={classType} fontSize={fontSize} iconType={iconType}></IconNode>{description}</Link>;
    }
}

export class ButtonClick extends React.Component {

    render() {
        const { classType, iconType, fontSize, color, onClick} = this.props;
        return <button onClick={onClick} className={this.props.className}><IconNode color={color} classType={classType} fontSize={fontSize} iconType={iconType}></IconNode></button>;
    }
}

export const BlurRouteButton = style(LinkBlock).attrs({
    padding: props => props.padding || '20px',
    width:props => props.width || '100%'
}) `
  background: rebeccapurple;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: 0.5s ease;
  width: ${props => props.width};
  box-shadow: 5px 5px 5px black;
  
  color: white;
  font-size:${props => props.fontSize};
 
 
  &:hover {
    opacity: 1;
    cursor: pointer;
    fill: rebeccapurple;
}
`

export const BlurButton = style.button.attrs({
    padding: props => props.padding || '20px',
    width:props => props.width || '100%'
}) `
  background: rebeccapurple;
  opacity: 0.8;
  transition: 0.5s ease;
  width: ${props => props.width};
  color: white;
  box-shadow: 5px 5px 5px black;
  font-size:${props => props.fontSize};
 
  &:hover {
    opacity: 1;
    cursor: pointer;
    fill: rebeccapurple;
}
`


