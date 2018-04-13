import style from 'styled-components'
import * as React from "react";
import {IconNode} from "./icon";
import {CounterText} from "./counterPage";


export const AppContainer = style.div.attrs({
    width: props => props.width || '100%'

}) `
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const AppWrapper = style.div.attrs({
    width: props => props.width || '100%'

}) `
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background-image: url("https://img3.goodfon.ru/original/1920x1080/2/50/art-the-witcher-vedmak.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    box-shadow: 10px 5px 5px black;
    
`


export const  WrapperContainer = style.div.attrs({
    width: props => props.width || '100%',
    padding: props => props.padding,
    margin: props => props.margin
}) `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    width: ${props => props.width};
    margin: ${props=> props.margin};
    padding: ${props => props.padding};
    
`

export const  WrapperEmptyContainer = style.div.attrs({
    onClick: props => props.onClick,
    width: props => props.width || '100%',
    padding: props => props.padding,
    margin: props => props.margin
}) `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: -1;
    width: ${props => props.width};
    margin: ${props=> props.margin};
    padding: ${props => props.padding};
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
      opacity: 1;
    }
`

export const  CentralContainer = style.div.attrs({
    width: props => props.width || '100%',
    padding: props => props.padding,
    margin: props => props.margin
}) `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    margin: ${props=> props.margin};
    padding: ${props => props.padding};
`




