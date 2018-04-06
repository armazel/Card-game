import style from 'styled-components'
import fontGwent from '../../fonts/Chronicles_font.ttf'


export const Header = style.h1.attrs({
    fontSize: props=>props.fontSize,
    color: props=> props.color || 'white',
    margin: props => props.margin
})`
  text-shadow: green;
  margin: ${props => props.margin};
  width: 100%;
  color:${props => props.color};
  display: flex;
  justify-content: center;
  font-size: ${props=> props.fontSize};
  font-family: 'Gwent';
  @font-face {
    font-family: 'Gwent';
    src: url(${fontGwent});
  }
`


export const List = style.ul.attrs({
    padding:props => props.padding || '10px',
    width: props => props.width
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: 'Gwent';
  @font-face {
    font-family: 'Gwent';
    src: url(${fontGwent});
  }
  width:${props => props.width}
  
`

export  const ListItem = style.li.attrs({
    fontSize:props => props.fontSize
})`
list-style-type: none;
color: black;
padding: 0 5px;
display: flex;
font-family: 'Gwent';
  @font-face {
    font-family: 'Gwent';
    src: url(${fontGwent});
  }
justify-content: center;
width: 100%;
`