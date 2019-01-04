// react
import React, { Component } from 'react';

// subcomponents
import Title from './Title';
import Module from './Module';

// data models

/**
 * Install component.
 */
class Install extends Component {
    constructor(props, state) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        window._backend.getModules(data => {
            this.setState({ data: data });
        });
    }

    handleChange() {
        //
    }

    render() {
        let links = [
            { name: "Dashboard", url: "/" },
            { name: "Installation" }
        ];

        console.log(this.state.data);

        return(
            <div>
                <Title name="Install Modules" links={JSON.stringify(links)} />

                {/* -- /page title -- */}
                <div id="content" className="padding-20">

                    { this.state.data.map((el, i) => {
                        return <Module key={i} data={el} />
                    })}

                </div>
            </div>
        )
    }
}

export default Install;