import style from 'styled-components'


export const CounterContainer = style.div.attrs({
    width: props => props.width || '100%'

}) `
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
