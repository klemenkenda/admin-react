// react
import React, { Component } from 'react';

// subcomponents
import Title from './Title';

// data models

// type definitions
type Props = {};
type State = {
    data: any
}

/**
 * Install component.
 */
class Install extends Component<Props, State> {
    constructor(props, state) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        window._backend.getModules(data => {
            this.setState({ data: data });
        });
    }

    render() {
        let links = [
            { name: "Dashboard", url: "/" },
            { name: "Installation" }
        ];

        return(
            <div>
                <Title name="Install Modules" links={JSON.stringify(links)} />

                {/* -- /page title -- */}
                <div id="content" className="padding-20">
                    <p>Installing</p>
                </div>
            </div>
        )
    }
}

export default Install;