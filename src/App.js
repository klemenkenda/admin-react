// @flow

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Auth from './lib/Auth';

import Install from './components/Install';
import Login from './components/Login/index';
import './App.css';

// authorization class instantiation
let auth = new Auth();

type Props = {
    history: ReactRouterPropTypes.history,
    location: ReactRouterPropTypes.location
};

type State = { };

class App extends Component<Props, State> {
    render() {
        // get current path
        console.log(this.props);

        // auth
        if (auth.isAuth()) {
            return (
                [
                    <Route path="/" exact={true} component={Install} key="1" />
                ]
            );
        } else if (auth.noAuthNeeded(this.props.location.pathname)) {
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
