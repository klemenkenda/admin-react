// react imports
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// lib import
import Backend from './lib/Backend';
import Auth from './lib/Auth';

// components

import Login from './components/Login';
import App from './components/App';

import './App.css';

// backend and authorization class instantiation to global variables
window._backend = new Backend("http://192.168.99.100/admin/api");
window._auth = new Auth();

class AppJS extends Component {
    render() {
        // get current path

        // auth
        if (window._auth.isAuth()) {
            return (
                <App />
            );
        } else if (window._auth.noAuthNeeded(this.props.location.pathname)) {
            return (
                [
                    <Route path="/login" exact={true} component={Login} key="2" />
                ]
            );
        } else {
            return(<Redirect to="/login" />)
        }
    }
}

export default AppJS;
