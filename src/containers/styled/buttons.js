import style from 'styled-components';

export const TomatoButton = style.button.attrs({
    padding: props => props.padding || '20px'
}) `
  background: tomato;
  border-radius: 5px;
  opacity: 0.8;
  color: gray;
  width: ${props => props.width}
`;
