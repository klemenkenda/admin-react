// react
import React, { Component } from 'react';

// subcomponents
import Title from './Title';

// data models

// type definitions

/**
 * Install component.
 */
class Dashboard extends Component {
    render() {
        let links = [
            { name: "Dashboard" }
        ];

        return(
            <div>
                <Title name="Dashboard" links={JSON.stringify(links)} />
            </div>
        );
    }
}

export default Dashboard;