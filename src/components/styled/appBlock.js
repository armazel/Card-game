import style from 'styled-components'
import * as React from "react";
import {IconNode} from "./icon";
import {CounterText} from "./counterPage";


export const AppContainer = style.div.attrs({
    width: props => props.width || '100%',
    visible: props => props.visible

}) `
    width: 100%;
    background: white;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
     @media(max-width: 1024px) {
      width: 100%;
      display: ${( visible ) => (visible ? 'flex' : 'none')};
      transform: translate3d(${({ visible }) => (visible ? '0' : '-100%')}, 0, 0);
      transition: box-shadow 0.7s ease, transform 0.5s ease;
      box-shadow: (${({ visible }) => (visible && '2px 0 5px rgba(0, 0, 0, 0.25)')});
      flex-wrap: wrap;
      justify-content: left;
      position: fixed;
      top: 0;
      bottom: 0;
      background: #0e7c5e;
    
  }
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


export const WrapperContainer = style.div.attrs({
    width: props => props.width || '100%',
    padding: props => props.padding,
    margin: props => props.margin
}) `
    display:flex;
    justify-content: center;
    position: absolute;
    outline: none;
    z-index: -1;
    top: 0;
    bottom: 0;
    width: ${props => props.width};
    margin: ${props => props.margin};
    padding: ${props => props.padding}; 
    
`

export const  WrapperInfoContent = WrapperContainer.extend`
  height: 88%;
  top: 70px;
  position: relative;
  display: block;
  z-index: 5;
  flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    max-height: 100vh;
    border: 10px solid transparent;
    overflow: hidden;
    @media(max-width: 1380px) {
      top: 40px;
      height: 82%;
    }
    @media(max-width: 1024px) {
      top: 10px;
      height: 90%;
    }
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
    overflow: auto;
    width: ${props => props.width};
    margin: ${props=> props.margin};
    padding: ${props => props.padding};
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
      opacity: 1;
    }
`

export const WrapperBlock = style.div.attrs()`
   
`

export const WrapperBlockVideo = style.div.attrs()`
   width: 100%;
   display: flex;
   justify-content: center;
   height: 400px;
   @media(max-width: 1380px) {
   width: 70%;
   height: 300px;
   }
`

export const WrapperScrolledList = WrapperEmptyContainer.extend`
   max-height: 150px;
   width: 100%;
   background: white;
   opacity: 0.6;
   display: flex;
   justify-content: center;
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




