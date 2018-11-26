// @flow

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as Auth from './lib/Auth';

import Install from './components/Install';


import './App.css';

type Props = {
    history: ReactRouterPropTypes.history,
    location: ReactRouterPropTypes.location
};

type State = { };

class App extends Component<Props, State> {
    render() {
        // get current path
        console.log(this.props);

        return (
            [
                <Route path="/install" exact={true} component={Install} key="1" />
            ]
        );
    }
}

export default App;
