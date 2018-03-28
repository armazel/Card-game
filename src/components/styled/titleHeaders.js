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
`