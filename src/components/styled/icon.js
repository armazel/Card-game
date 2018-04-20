import * as React from 'react'
import 'material-design-icons'
import style from 'styled-components'

class IconBlock extends React.Component {

    render() {
        const { className, iconType, classType, fontSize, onClick } = this.props;
        return (classType) ?
            <i onClick={onClick} className={className + ' ' + classType}>{iconType}</i> : '';
    }
}


export const IconNode = style(IconBlock).attrs({
    marginLeft: props => props.marginLeft,
    fontSize: props => props.fontSize,
    marginRight: props => props.marginRight,
    color: props => props.color || 'white',
})`

margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
font-size: ${props => props.fontSize};
color: ${props=> props.color};
transition: all 0.5s ease;
opacity: 0.5;
 &:hover {
    opacity: 1;
    cursor: pointer;
    fill: rebeccapurple;
}
@media(max-width: 1380px) {
    font-size: 32px;
  }
  @media(max-width: 1024px) {
    font-size: 54px;
  }
`


export const IconBurgerMenu = IconNode.extend`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  @media(max-width: 1024px) {
    font-size: 32px;
    display: ${({ visible }) => (!visible ? 'flex' : 'none')};
  }
`

export const IconCloseMenu = IconNode.extend.attrs({
    visible: props => props.visible
})`
  display: none;
  position: absolute;
  cursor: pointer;
  @media(max-width: 1024px) {
    font-size: 54px;
   display: ${({ visible }) => (visible ? 'flex' : 'none')};
   position: absolute;
   top: 10px;
   right: 10px;
   z-index: 15;
  }
`