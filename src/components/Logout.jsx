// react
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// subcomponents

// data models

// type definitions

/**
 * Install component.
 */
class Install extends Component {
    render() {
        localStorage.removeItem("user");
        return(
            <Redirect to="/" />
        )
    }
}

export default Install;