import style from 'styled-components'


export const AppContainer = style.div.attrs({
    width: props => props.width || '100%'

}) `
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
`


export const  WrapperContainer = style.div.attrs({
    width: props => props.width || '100%'
}) `
    display:flex;
    position: relative;
    top: 10px;
`