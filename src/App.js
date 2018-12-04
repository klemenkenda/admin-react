// react imports
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

// lib import
import Backend from './lib/Backend';
import Auth from './lib/Auth';

// components
import Install from './components/Install';
import Login from './components/Login/index';
import './App.css';

// backend and authorization class instantiation to global variables
window._backend = new Backend("http://192.168.99.100/admin/api");
window._auth = new Auth();

type Props = {
    history: ReactRouterPropTypes.history,
    location: ReactRouterPropTypes.location
};

type State = { };

class App extends Component<Props, State> {
    render() {
        // get current path

        // auth
        if (window._auth.isAuth()) {
            return (
                [
                    <Route path="/" exact={true} component={Install} key="1" />
                ]
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

export default App;
