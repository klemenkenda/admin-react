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
    componentDidMount() {
        window._backend.getTest((data) => {
            console.log(data);
        });

    }

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