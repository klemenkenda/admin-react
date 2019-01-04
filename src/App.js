// react imports
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// lib import
import Backend from './lib/Backend';
import Auth from './lib/Auth';

// components
import Install from './components/Install';
import Menu from './components/Menu';
import HeaderTop from './components/HeaderTop';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';

import './App.css';

// backend and authorization class instantiation to global variables
window._backend = new Backend("http://192.168.99.100/admin/api");
window._auth = new Auth();

class App extends Component {
    render() {
        // get current path

        // auth
        if (window._auth.isAuth()) {
            return (
                <div id="wrapper">
                    <Menu />
                    <HeaderTop />
                    <section id="middle">
                        {[
                            <Route path="/" exact={true} component={Dashboard} key="1" />,
                            <Route path="/logout" exact={true} component={Logout} key="3" />,
                            <Route path="/install" exact={true} component={Install} key="4" />
                        ]}
                    </section>
                </div>
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
