import style from 'styled-components'
import {Link} from 'react-router-dom'
import * as React from 'react'
import {IconNode} from "./icon";
import fontGwent from '../../fonts/Chronicles_font.ttf'

export class LinkBlock extends React.Component {

    render() {
        const { to,description,classType, iconType, fontSize, onClick } = this.props;
        return <Link onClick={onClick} className={this.props.className} to={to}><IconNode classType={classType} fontSize={fontSize} iconType={iconType}></IconNode>{description}</Link>;
    }
}

export class ButtonClick extends React.Component {

    render() {
        const { classType, iconType, fontSize, color, onClick, description} = this.props;
        return (
            <button onClick={onClick} className={this.props.className}>
                <IconNode color={color} classType={classType} fontSize={fontSize} iconType={iconType}></IconNode>
                {description}
            </button>
        );
    }
}

export const BlurRouteButton = style(LinkBlock).attrs({
    padding: props => props.padding || '20px',
    width:props => props.width || '100%'
}) `
  background: #0e7c5e;
  opacity: 0.8;
  display: flex;
  text-shadow: 0.559px 0.829px 4px #000, 3px 3px 30px #efff66;
  justify-content: center;
  text-decoration: none;
  transition: 0.5s ease;
  width: ${props => props.width};
  box-shadow: 5px 5px 5px black;
  font-family: 'Gwent';
  @font-face {
    font-family: 'Gwent';
    src: url(${fontGwent});
  }
  
  
  
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
  background: #0e7c5e;
  opacity: 0.8;
  outline: none;
  transition: 0.5s ease;
  width: ${props => props.width};
  color: white;
  box-shadow: 5px 5px 5px black;
  font-size:${props => props.fontSize};
  font-family: 'Gwent';
  @font-face {
    font-family: 'Gwent';
    src: url(${fontGwent});
  }
 
  &:hover {
    opacity: 1;
    cursor: pointer;
    fill: rebeccapurple;
}
`

export const BlurRouteButtonStarted = BlurButton.extend`
  
`


export const BlurButtonLogoutBlock = style.div.attrs({})`
  position:absolute;
  right: 10px;
  top: 80px;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const SoundToggleBlock = style.div.attrs({})`
  position:relative;
  left: 0px;
  //top: 120px;
  width: 10%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.5s all ease;
  cursor: pointer;
  margin: 20px 5px 20px ;
  &:hover {
    opacity: 1;
    cursor: pointer;
    fill: rebeccapurple;
}
`


