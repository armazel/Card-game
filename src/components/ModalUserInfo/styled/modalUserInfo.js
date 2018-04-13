import * as React from 'react'
import 'material-design-icons'
import style from 'styled-components'
import fontGwent from '../../../fonts/Chronicles_font.ttf'



export const ModalHeaderBlock = style.div.attrs({})`
  background: #0e7c5e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
`

export const ModalBlock = style.div.attrs({
    width: props=>props.width || '100%'
})`
  background: white;
  display: flex;
  width: ${props=>props.width};
  justify-content: center;
  align-items: center;
  padding:0 ;
  flex-wrap: wrap;
  margin: 10px;
`

export const ModalBodyBlock = style(ModalBlock).attrs({})`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
`

