import style from 'styled-components'


export const Header = style.h1.attrs({
    fontSize: props=>props.fontSize,
    color: props=> props.color
})`
  text-shadow: green;
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: ${props=> props.fontSize}
`


export const List = style.ul.attrs({
    padding:props => props.padding || '10px',
    width: props => props.width
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width:${props => props.width}
  
`

export  const ListItem = style.li.attrs({
    fontSize:props => props.fontSize
})`
list-style-type: none;
color: black;
padding: 0 5px;
display: flex;
justify-content: center;
width: 100%;
`