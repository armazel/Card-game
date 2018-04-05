import style from 'styled-components'


export const LoginWrapper = style.div.attrs({
    background: props => props.background,
    width: props => props.width
})`
  text-shadow: blueviolet;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  margin: 10px;
  width: ${props => props.width};
  background: ${props => props.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: ${props=> props.fontSize}
`

export const InputLoginWrapper = style.div.attrs({
    background: props => props.background
})`
  text-shadow: blueviolet;
  margin: 10px;
  width: ${props => props.width};
  background: ${props => props.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: ${props=> props.fontSize}
`

