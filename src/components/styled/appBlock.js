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
    width: props => props.width || '100%',
    padding: props => props.padding,
    margin: props => props.margin
}) `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    top: 10px;
    width: ${props => props.width};
    margin: ${props=> props.margin};
    padding: ${props => props.padding};
`


