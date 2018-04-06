import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom'
import storage from '../utils/storage';
import AlertTemplate from 'react-alert-template-basic'


export const PrivateRouteAboutUs = ({ component: Component }) => (
    <Route render={(props) => (
        !!storage.login === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);


export const PrivateRouteCounter = ({ component: Component }) => (
    <Route render={(props) => (
        !!storage.login === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);



//Убранн коммит
