import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom'
import storage from '../utils/storage';


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

export const PrivateRouteGameArea = ({ component: Component }) => (
    <Route render={(props) => (
        !!storage.login === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);





//Убранн коммит
