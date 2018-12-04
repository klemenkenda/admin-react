// react
import React, { Component } from 'react';

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
            <p>OK</p>
        )
    }
}

export default Install;