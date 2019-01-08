// react
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// subcomponents
import Install from './Install';
import Menu from './Menu';
import HeaderTop from './HeaderTop';
import Add from './Add';

import Dashboard from './Dashboard';
import Logout from './Logout';

// data models
import Backend from '../lib/Backend';

// type definitions

// backend and authorization class instantiation to global variables
window._backend = new Backend("http://192.168.99.100/admin/api");

/**
 * Main app container.
 */
class App extends Component {

    constructor() {
        super();

        this.state = {
            config: []
        }
    }

    /**
     * Load configuration.
     */
    componentDidMount() {
        window._backend.getModules((data) => {
            this.setState({
                config: data
            })
        })
    }

    render() {
        return(
            <div id="wrapper">
                <Menu config={this.state.config} />
                <HeaderTop config={this.state.config} />
                <section id="middle">
                    {[
                        <Route path="/" exact={true} component={Dashboard} key="1" />,
                        <Route path="/logout" exact={true} component={Logout} key="3" />,
                        <Route path="/install" exact={true} render={(props) => <Install {...props} config={this.state.config} /> } key="4" />,

                        <Route path="/add/:id" exact={true} render={(props) => <Add {...props} config={this.state.config} />} key="5" />,
                        <Route path="/list/:id" exact={true} component={Add} key="6" />
                    ]}
                </section>
            </div>
        )
    }
}

export default App;