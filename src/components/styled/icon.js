import * as React from 'react'
import 'material-design-icons'
import style from 'styled-components'

class IconBlock extends React.Component {

    render() {
        const { className, iconType, classType } = this.props;
        return (classType) ?
            <i className={className + ' ' + classType}>{iconType}</i> : '';
    }
}


export const IconNode = style(IconBlock).attrs({
    marginLeft: props => props.marginLeft,
    marginRight: props => props.marginRight,
    color: props => props.color || 'white'
})`

margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
font-size: ${props => props.fontSize};
color: ${props=> props.color};
`
